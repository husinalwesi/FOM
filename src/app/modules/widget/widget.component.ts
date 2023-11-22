import { ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { isPlatformBrowser } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';
const maximumWidth = 1440;

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() pageType: string = "";
  isNotificationEnabled: boolean = true;
  isChatEnabled: boolean = true;
  isSubSitesEnabled: boolean = true;
  isRTL: boolean = this.TranslationService.isRTL();
  margin: number = 0;
  isLoadingEnabled: boolean = true;

  chatWidget: any = {
    // isEnabled: true,
    content: 'chat',
    title: {
      en: '',
      ar: ''
    },
    link: '/second-page',
    backgroundColor: 'bg-[#ECD9AE]',
    hoverClass: 'chat-container',
    // 
    icon: '',//assets/svgs/chat.svg
    width: 32,
    heigh: 32,
    // 
    polygonColor: '#D1A755',
    animation: 'animate-[fadeInUp_0.6s_1.45s_ease_both]',
    notification: false
  };

  notificationWidget: any = {
    // isEnabled: true,
    content: 'notification',
    title: {
      en: '',
      ar: ''
    },
    link: '/second-page',
    backgroundColor: 'bg-[#3E64FF]',
    hoverClass: 'notification-container',
    // 
    icon: '',//assets/svgs/notification.svg
    width: 30,
    heigh: 30,
    // 
    polygonColor: '#174E91',
    animation: 'animate-[fadeInUp_0.6s_1.8s_ease_both]',
    notification: 2
  };

  starWidget: any = {
    // isEnabled: true,
    isDataShown: false,
    icon: '',
    list: []
  };


  isMouseOver: any = {
    notification: false,
    star: false,
    chat: false
  };

  constructor(
    private translate: TranslateService,
    private resizeService: ResizeService,
    private cdk: ChangeDetectorRef,
    private TranslationService: TranslationService,
    private multimediaService: MultimediaService,
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngOnInit(): void {
    this.enableMaximumWidthFeature();
    this.getData();
  }

  getData() {
    this.getStickyIcons();
    this.getSubSitesList();
  }

  enableMaximumWidthFeature() {
    this.setMaximumWidth(this.resizeService.getWindowWidth());
    this.resizeService.screenWidth$.subscribe(screenWidth => this.setMaximumWidth(screenWidth));
  }

  setMaximumWidth(screenWidth: any) {
    this.margin = screenWidth > maximumWidth ? (screenWidth - maximumWidth) / 2 : 0;
    // 
    this.closeWidget();
  }

  closeWidget() {
    for (const key in this.isMouseOver) {
      if (this.isMouseOver[key]) this.setAnimationClass(key, false);
    }
  }

  mouseout(option: string, event: MouseEvent) {
    event.stopPropagation();
    this.setAnimationClass(option, false);
  }

  mouseover(option: string, event: MouseEvent) {
    event.stopPropagation();
    this.setAnimationClass(option, true);
  }

  setAnimationClass(option: string, isMouseOverEnabled: boolean) {
    if (this.isMouseOver[option] !== isMouseOverEnabled) this.isMouseOver[option] = isMouseOverEnabled;
    if (!this.starWidget.isDataShown && option === "star" && isMouseOverEnabled) this.starWidget.isDataShown = true;
    this.cdk.detectChanges();
  }

  getStickyIcons() {
    const isUsreLoggedIn = isPlatformBrowser(this.platformId) ? !!localStorage.getItem('token') : '';//is user logged in
    this.multimediaService.getStickyIcons().subscribe((response) => {
      // 
      this.isChatEnabled = response.showChatBotIcon;
      this.chatWidget.title = {
        en: response.chatBotTitleEN,
        ar: response.chatBotTitleAR
      };
      this.chatWidget.icon = response.chatBotIconImage;
      // 
      this.isNotificationEnabled = isUsreLoggedIn && response.showNotificationsIcon;
      this.notificationWidget.title = {
        en: response.notificationsTitleEN,
        ar: response.notificationsTitleAR
      };
      this.notificationWidget.icon = response.notificationsIconImage;
      // 
      this.isSubSitesEnabled = response.showSubsitesIcon;
      // this.starWidget.title = {//not in use
      //   en: response.chatBotTitleEN,
      //   ar: response.chatBotTitleAR
      // };
      this.starWidget.icon = response.subsitesIconImage;
      this.isLoadingEnabled = false;
    });
  }

  getSubSitesList() {
    this.multimediaService.getSubSitesList().subscribe((response) => {
      const responseArray = Array.isArray(response) ? response : [response];
      let originalArray = responseArray.filter((item: any) => item.showSubsite).map((item: any) => {
        return {
          src: item.subsiteIconImageID,
          width: "81",
          height: "24",
          alt: item.subsiteTitleEN,
          title: item.subsiteTitleEN,
          link: item.subsiteURL
          // link: item.subsiteURL
        }
      });

      // originalArray = [...originalArray, ...originalArray, ...originalArray, ...originalArray, ...originalArray, ...originalArray, ...originalArray, ...originalArray,]


      // Initialize two empty arrays
      const firstArray = [];
      const secondArray = [];

      // Loop through the original array
      for (let i = 0; i < originalArray.length; i++) {
        // Check if the current index is even or odd
        if (i % 2 === 0) {
          // Even index, push to the first array
          firstArray.push(originalArray[i]);
        } else {
          // Odd index, push to the second array
          secondArray.push(originalArray[i]);
        }
      }
      this.starWidget.list = [firstArray.splice(0, 3), secondArray.splice(0, 3)];
    });
  }

  fireEvent(fireType: string = '') {
    if (fireType === 'chat' && typeof window !== 'undefined') {
      let verloopBtn: any = document.querySelector(".verloop-button");
      if (verloopBtn) verloopBtn.click();
    }
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
