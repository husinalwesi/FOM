import { Component, ElementRef, Input, OnInit, ViewChild, Inject, OnDestroy, SimpleChanges, computed, PLATFORM_ID } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';
import { ScrollService } from 'src/app/services/scroll.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { NavigationEnd, Router } from '@angular/router';
import { PlatformService } from 'src/app/services/platform.service';
import { Location, isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { IdTokenClaims } from '@azure/msal-common';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { b2cPolicies } from '../../auth-config';
import { SharedService } from 'src/app/services/shared.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { GUID } from "src/app/const/guid";
import { Store } from '@ngrx/store';
import { beginLogin, storeToken } from 'src/app/store/user/user.action';
import { selectToken, selectUserData } from 'src/app/store/user/user.selectors';
import { PlaceholderImgService } from 'src/app/services/placeholder-img.service';


type IdTokenClaimsWithPolicyId = IdTokenClaims & {
  acr?: string,
  tfp?: string,
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private multimediaService: MultimediaService,
    private translate: TranslateService,
    private translationService: TranslationService,
    private resizeService: ResizeService,
    private placeholderImgService: PlaceholderImgService,
    private scrollService: ScrollService,
    private router: Router,
    public platformService: PlatformService,
    private location: Location,
    private sharedService: SharedService,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object,
    private TranslationService: TranslationService) {
    this.lang = this.TranslationService.getSelectedLanguage();

  }


  lang: string = 'en';
  userDetails: any = {
    isLoggedIn: false,
    data: null
  };
  private readonly _destroying$ = new Subject<void>();
  isSearchModal: boolean = false;
  isModalEnabled: boolean = false;
  @Input() pageType: string = "";
  isPreviusVisitedPageAHomePage: boolean = true;
  userMenu: any = [
    {
      title: 'DASHBOARD.VIEW_PROFILE',
      svg: 'assets/svgs/whistle-blowing.svg',
      link: '/dashboard/profile',
    },
    {
      title: 'DASHBOARD.MY_WALLET',
      svg: 'assets/svgs/whistle-blowing.svg',
      link: '/dashboard/wallet',
    },
    // {
    //   title: 'Check My Appointments',
    //   svg: 'assets/svgs/whistle-blowing.svg',
    //   link: '/dashboard/apppointment-history',
    // },
    // {
    //   title: 'My Vehicle',
    //   svg: 'assets/svgs/whistle-blowing.svg',
    //   link: '/dashboard/my-vehicle',
    // },
    // {
    //   title: 'Statistics',
    //   svg: 'assets/svgs/whistle-blowing.svg',
    //   link: '/dashboard/home',
    // },
    // {
    //   title: 'Help',
    //   svg: 'assets/svgs/whistle-blowing.svg',
    //   link: '/dashboard/help',
    // }
  ];
  isUserMenuEnabled: boolean = false;
  isEn: boolean = this.translationService.getSelectedLanguage() === 'en';
  isStickySettingEnabled: boolean = true;
  isMobileMenuEnabled: boolean = false;
  @ViewChild('header', { static: true }) headerElement!: ElementRef;
  isStickyEnabled: boolean = false;
  logo: any = {
    woqod: {
      normal: "assets/images/logo-1-white.svg",
      // normal: "assets/images/logos/header.svg",
      // sticky: "assets/images/logos/header.svg"
      sticky: "assets/images/logo-1-white.svg",
    },
    fahes: {
      normal: "assets/images/logos/fahes.svg",
      sticky: "assets/images/logos/fahes-white.svg"
    }
  };
  topLinks: any = [];

  menuItems: any = {
    fahes: {
      en: [],
      ar: []
    },
    woqod: {
      en: [],
      ar: []
    }
  };

  langs: any = this.translate.getLangs() || [];
  currentLang: string = this.translationService.getSelectedLanguage();
  isLangMenuOpened: boolean = false;


  isAuth: any
  isSubmitted: boolean = false;
  checkBox1: any = {
    title: {
      en: 'To proceed recharge you agree<br/> the <a href="/pages/TopupTermsAndCondition">Terms and Conditions</a>',
      ar: 'To proceed recharge you agree<br/>the <a href="/pages/TopupTermsAndCondition">Terms and Conditions</a>'
    },
    name: 'limitedHours',
    value: false
  };

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if (this.pageType) this.getData();
    });
  }

  getData() {
    const isCurrentMenuItems = this.menuItems?.[this.pageType]?.[this.lang];
    if (!isCurrentMenuItems || isCurrentMenuItems.length === 0) this.getHeader();
  }

  ngOnInit() {
    this.getHeaderHelper();
    this.getAmountOfWallet();
    setTimeout(() => {
      this.switchSticky(this.location.path());
    });
    this.store.select(selectToken).subscribe(data => {
      this.isAuth = data;
      if (this.isAuth && this.isAuth.length > 0) {
        this.getUserByToken();
        this.getSiteUserWalletAmmount();
      }
    })

    this.authService.instance.enableAccountStorageEvents();
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED),
      )
      .subscribe((result: EventMessage) => {
        if (typeof window !== 'undefined' && this.authService.instance.getAllAccounts().length === 0) {
          window.location.pathname = "/";
        }
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.checkAndSetActiveAccount();
      })

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS
          || msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS
          || msg.eventType === EventType.SSO_SILENT_SUCCESS),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {

        let payload = result.payload as AuthenticationResult;
        let idtoken = payload.idTokenClaims as IdTokenClaimsWithPolicyId;

        if (idtoken.acr === b2cPolicies.names.signUpSignIn || idtoken.tfp === b2cPolicies.names.signUpSignIn) {
          this.authService.instance.setActiveAccount(payload.account);
        }

        //set token value in local storage
        const idToken = this.authService.instance.getActiveAccount()?.idToken;
        if (idToken && idToken?.length > 0) {
          const idTokenString = idToken?.toString() || "";
          if (isPlatformBrowser(this.platformId))
            localStorage.setItem('token', idTokenString);
          this.store.dispatch(storeToken({ token: idToken }));
          // this.getUserByToken();
        }
        return result;
      });

    // this.hitFakeAPI();
  }

  // hitFakeAPI() {
  //   this.multimediaService.fakeAPI().subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  userWalletAmount: any = ''; // Declare a variable to store the fetched data

  getAmountOfWallet() {
    // if (!this.userDetails.isLoggedIn) return;
    this.multimediaService.getAmountOfWallet({}).subscribe((response: number[]) => {
      // Assuming response is an array of numbers, parse each element to an integer
      this.userWalletAmount = response.filter((item: any) => item).map(amount => parseInt(amount.toString(), 10));
    });
  }
  inputValue: number | string = '';  // Variable to store the input value

  // Function to update the inputValue when a button is clicked
  updateInput(amount: number) {
    this.inputValue = amount;
  }


  userWalletAmmount: any = '';
  getSiteUserWalletAmmount() {
    this.multimediaService.getSiteUserWalletAmmount({}).subscribe((response) => {
      this.userWalletAmmount = response;
    });
    if (!this.userDetails.isLoggedIn) return;
    this.multimediaService.getSiteUserWalletAmmount({}).subscribe((response) => {
      this.userWalletAmmount = response;
    });
  }
  getUserByToken(): void {
    try {
      this.store.dispatch(beginLogin())
      this.getUserDetails()
      // this.router.navigateByUrl(this.routeLocalizationPipe.transform(''));
      this.sharedService.disableFullLoader();
    } catch (error) {
      // console.error('Error fetching users', error);
      this.logout();
      this.sharedService.disableFullLoader();
    }

    // this.multimediaService.getUserByToken().subscribe(
    //   (user) => {
    //     if (user?.siteUsersID) {
    //       localStorage.setItem('userDetails', JSON.stringify(user));
    //       this.getUserDetails();
    //       this.router.navigateByUrl(this.routeLocalizationPipe.transform(''));
    //       this.sharedService.disableFullLoader();
    //     } else {
    //       // deactivated account
    //       console.log("deactivated account, will logout..");
    //       this.logout();
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching users', error);
    //     this.logout();
    //   }
    // );
  }

  getUserDetails() {
    this.store.select(selectUserData).subscribe((data) => {
      // should be helper function
      const isObjectEmpty = (object: any) => {
        return (
          object &&
          Object.keys(object).length === 0 &&
          object.constructor === Object
        );
      };
      const isData = isObjectEmpty(data)
      if (data?.siteUsersID) {
        this.userDetails = {
          isLoggedIn: !isData,
          data: !!data ? {
            name: data?.firstName + ' ' + data?.lastName,
            img: data?.imageID
          } : null
        };
      }

      if (!isData && !data?.siteUsersID) {
        // deactivated account
        console.log("deactivated account, will logout..");
        this.logout();
        this.sharedService.disableFullLoader();
      }
    })

  }

  getHeaderHelper(): void {
    this.multimediaService.getHeaderHelper().subscribe(
      (response) => {
        // 
        let temp = [];

        const invstor = (response || []).find((item: any) => item.woqodHelpAreaID === GUID.woqod.header.invstor) || false;
        const freeNumber = (response || []).find((item: any) => item.woqodHelpAreaID === GUID.woqod.header.freeNumber) || false;
        const callCenter = (response || []).find((item: any) => item.woqodHelpAreaID === GUID.woqod.header.callCenter) || false;

        if (invstor) temp.push({
          link: invstor.url || '',
          title: {
            en: invstor.titleEN || '',
            ar: invstor.titleAR || ''
          },
          icon: invstor.iconID || '',
          href: null
        });

        if (freeNumber) temp.push({
          link: null,
          title: {
            en: freeNumber.titleEN || '',
            ar: freeNumber.titleAR || ''
          },
          // icon: 'assets/svgs/headset.svg',
          icon: freeNumber.iconID || '',
          href: freeNumber.url || '',
        });

        if (callCenter) temp.push({
          link: null,
          title: {
            en: callCenter.titleEN || '',
            ar: callCenter.titleAR || ''
          },
          // icon: 'assets/svgs/phone.svg',
          icon: callCenter.iconID || '',
          href: callCenter.url || '',
        });
        // 
        this.topLinks = temp;
      }
    );
  }

  getHeader(): void {
    this.multimediaService.getHeader({}, this.lang).subscribe(
      (response) => {
        const headerStr = response?.treeItems || '';
        if (!headerStr) return;
        const headerResponseFull = headerStr ? JSON.parse(headerStr) : null;
        if (!headerResponseFull) return;
        const headerResponse = headerResponseFull && headerResponseFull.length > 0 ? headerResponseFull[0] : null;
        if (!headerResponse) return;
        const header = headerResponse.children && headerResponse.children.length > 0 ? headerResponse.children : null;
        if (!header) return;
        // console.log(header);

        let temp = [];

        for (let index = 0; index < header.length; index++) {
          if (header[index].data.IsSectionVisible === 'True') {
            const hasChildrens = header[index].children && header[index].children.length > 0;
            temp.push({
              title: header[index].text,
              link: header[index].data.URL || '',
              linkTarget: header[index].data.URLTarget || '',
              // link: hasChildrens ? '' : header[index].data.URL,
              isNew: index === 0,
              subMenu: hasChildrens ? this.handleMenuInner(header[index].children) : []
            });
          }
        }

        this.menuItems[this.pageType][this.lang] = temp;
      }
    );
  }

  handleMenuInner(children: any) {
    // console.log(children);

    let temp = [];
    for (let index = 0; index < children.length; index++) {
      if (children[index].data.IsSectionVisible === 'True') {
        if (
          (children[index].children && children[index].children.length > 0) ||
          (!children[index]?.data?.Image || children[index]?.data?.Image === GUID.empty)
        ) {
          temp.push({
            menuWithTitle: [{
              title: children[index].text || '',
              link: children[index].data.URL || '',
              linkTarget: children[index].data.URLTarget || '',
              list: (children[index].children || []).filter((item: any) => item.data.IsSectionVisible === 'True').map((item: any) => {
                return {
                  title: item.text || '',
                  link: item.data.URL || '',
                  linkTarget: item.data.URLTarget || '',
                }
              }) || []
            }]
          });
        } else {
          temp.push({
            menuDescription: {
              img: children[index].data.Image || '',
              title: children[index].text || '',
              desc: children[index].data.Description || '',
              btn: {
                // text: 'Read more <span class="mt-[3px]">&#8594;</span>',
                text: children[index].data.ButtonText || '',
                link: children[index].data.URL || '',
                linkTarget: children[index].data.URLTarget || ''
              }
            }
          });
        }
      }
    }
    return temp;
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidth$.subscribe(screenWidth => this.closeMobileMenu());
    this.scrollService.scrollChange$.subscribe(data => this.updateSticky(data));
    this.switchStickyOnRouteChange();
  }

  setLang() {
    this.sharedService.enableFullLoader();
    setTimeout(() => {
      this.isEn = !this.isEn;
      let lang: string = this.isEn ? 'en' : 'ar';
      if (this.translationService.getSelectedLanguage() !== lang) {
        this.translationService.setLanguage(lang);
        this.currentLang = lang;
      }
      setTimeout(() => {
        if (typeof window !== 'undefined')
          window.location.reload();
      });
    }, 300);
    // this.closeMobileMenu();
  }

  updateHeader(isEnabled: boolean) {
    if (typeof window !== 'undefined') {
      this.isStickySettingEnabled = isEnabled;
      if (this.isStickySettingEnabled) {
        let headerHeight = this.headerElement.nativeElement.offsetHeight;
        document.body.style.paddingTop = `${this.resizeService.isDesktop() ? (headerHeight - (this.isStickyEnabled ? 1 : 31)) : headerHeight}px`;
        this.isStickyEnabled = true;
      } else {
        document.body.style.paddingTop = `0px`;
        this.isStickyEnabled = false;
      }
    }
  }

  updateSticky(data: any) {
    if (!data.isChanged) return;
    if (!this.isPreviusVisitedPageAHomePage) {
      this.isStickyEnabled = true;
      return;
    }
    if (this.headerElement && this.headerElement.nativeElement) {
      const isStickyEnabledTemp = data.position > (this.headerElement.nativeElement.offsetHeight / 4);
      if (this.isStickyEnabled == isStickyEnabledTemp) return;
      this.isStickyEnabled = isStickyEnabledTemp;
    }
  }

  toggleMobileMenu() {
    if (typeof window !== 'undefined') {
      this.isMobileMenuEnabled = !this.isMobileMenuEnabled;
      document.body.style.overflow = this.isMobileMenuEnabled ? `hidden` : `auto`;
    }
  }

  closeMobileMenu(event: any = null) {
    if (this.isMobileMenuEnabled) this.toggleMobileMenu();
    this.isLangMenuOpened = false;
  }

  toggleLangMenu() {
    this.isLangMenuOpened = !this.isLangMenuOpened;
  }

  switchStickyOnRouteChange() {
    if (this.platformService.isClient()) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.switchSticky(event.urlAfterRedirects);
        }
      });
    }
  }

  switchSticky(fullPath: string) {
    const excludePages = [
      '',//refere to main home page
      '/fahes'
    ];
    const path = fullPath.replace(`/${this.translationService.getSelectedLanguage()}`, ``);
    const isHomePage = excludePages.filter(item => item === path).length > 0;
    if (this.isPreviusVisitedPageAHomePage != isHomePage) {
      setTimeout(() => {
        this.updateHeader(!isHomePage);
      }, 150);
    }
    this.isPreviusVisitedPageAHomePage = isHomePage;
  }

  closeSearchModal(event: any) {
    this.isSearchModal = false;
  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      // add your code for handling multiple accounts here
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  login(userFlowRequest?: RedirectRequest | PopupRequest) {

    // save last url in the localstorage
    // if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
    //   if (this.msalGuardConfig.authRequest) {
    //     this.authService.loginPopup({ ...this.msalGuardConfig.authRequest, ...userFlowRequest } as PopupRequest)
    //       .subscribe((response: AuthenticationResult) => {
    //         this.authService.instance.setActiveAccount(response.account);
    //       });
    //   } else {
    //     this.authService.loginPopup(userFlowRequest)
    //       .subscribe((response: AuthenticationResult) => {
    //         this.authService.instance.setActiveAccount(response.account);
    //       });
    //   }
    // } else {

    // }

    // if (this.msalGuardConfig.authRequest) {
    //   console.log('first');
    //   this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest, ...userFlowRequest } as RedirectRequest);
    // } else {
    //   console.log('second');
    //   this.authService.loginRedirect(userFlowRequest);
    // }

    this.sharedService.enableFullLoader();
    if (isPlatformBrowser(this.platformId))
      localStorage.setItem('lastRoute', this.location.path());
    this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest, ...userFlowRequest } as RedirectRequest);

  }

  logout() {
    this.sharedService.enableFullLoader();
    const activeAccount =
      this.authService.instance.getActiveAccount() ||
      this.authService.instance.getAllAccounts()[0];

    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.logoutPopup({
        account: activeAccount,
      });
    } else {
      this.authService.logoutRedirect({
        account: activeAccount,
      });
    }
  }

  // unsubscribe to events when component is destroyed
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  isIconClicked = false;
  isIconClicked2 = false;

  toggleIcon() {
    this.isIconClicked = !this.isIconClicked;
  }

  toggleIcon2() {
    this.isIconClicked2 = !this.isIconClicked2;
  }

  toPayment() {
    this.isSubmitted = true;
    if (this.checkBox1.value && this.inputValue) {
      this.isModalEnabled = false;
      this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/checkout?amount=${this.inputValue}`));
    }
  }

  clickOnMenuItem(url: string) {
    this.isUserMenuEnabled = false;
    this.router.navigateByUrl(this.routeLocalizationPipe.transform(url));
  }

}
