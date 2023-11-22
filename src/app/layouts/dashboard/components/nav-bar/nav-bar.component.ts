import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { SharedService } from 'src/app/services/shared.service';
import { Store } from '@ngrx/store';
import { selectUserData } from 'src/app/store/user/user.selectors';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  userWalletAmmount: number = 0;
  userMenu: any = [
    {
      title: 'View Profile',
      svg: 'assets/svgs/whistle-blowing.svg',
      link: '/dashboard/profile',
    },
    {
      title: 'My Wallet',
      svg: 'assets/svgs/whistle-blowing.svg',
      link: '/dashboard/wallet',
    },
    {
      title: 'Check My Appointments',
      svg: 'assets/svgs/whistle-blowing.svg',
      link: '/dashboard/apppointment-history',
    },
    {
      title: 'My Vehicle',
      svg: 'assets/svgs/whistle-blowing.svg',
      link: '/dashboard/my-vehicle',
    }
  ];
  userDetails: any = {
    isLoggedIn: false,
    data: {
      img: 'https://atip.piercecountywa.gov/img/user/placeholder-user.jpg'
    }
  };
  isUserMenuEnabled: boolean = false;
  @Output() toggleSideMenu: EventEmitter<string> = new EventEmitter();
  isDdlEnabled: boolean = false;
  fireCloseAnimation: boolean = false;

  walletDDL: any = [
    "Assigned Limit",
    "Available limit",
    "History",
    "Balance"
  ];
  isWalletDDLEnabled: boolean = false;
  isWalletDDL: boolean = false;

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private multimediaService: MultimediaService,
    private sharedService: SharedService,
    private store: Store,
  ) {
    this.getuserDetails();
  }

  ngOnInit(): void {
    this.getSiteUserWalletAmmount();
  }

  toggleDDL() {
    if (this.isDdlEnabled) {
      this.fireCloseAnimation = true;
      setTimeout(() => {
        this.isDdlEnabled = false;
        this.fireCloseAnimation = false;
      }, 300);
    } else {
      this.isDdlEnabled = true;
    }
  }

  openSideMenu() {
    this.toggleSideMenu.emit();
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

  getuserDetails() {
    // let userDetails: any = localStorage.getItem('userDetails');
    // this.userDetails = userDetails ? JSON.parse(userDetails) : null;

    this.store.select(selectUserData).subscribe((user) => {
      this.userDetails = user || null
    })
  }

  getSiteUserWalletAmmount() {
    this.multimediaService.getSiteUserWalletAmmount({}).subscribe((response) => {
      this.userWalletAmmount = response;
    });
  }

}
