import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { beginLogin } from 'src/app/store/user/user.action';
import { selectUserData } from 'src/app/store/user/user.selectors';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  userDetails: any = null;
  temp: boolean = false;
  walletDDL: any = [
    "Assigned Limit",
    "Available limit",
    "History",
    "Balance"
  ];
  isWalletDDLEnabled: boolean = false;
  @Input() isSideMenuActive: boolean = false;
  menus: any = [
    [
      {
        title: 'DASHBOARD.DASHBOARD',
        linke: '/dashboard/home',
        svg: {
          src: 'assets/svgs/map-marker.svg',
          fill: '',
          stroke: '#757575'
        },
        subMenu: null
      },
      {
        title: 'DASHBOARD.MY_PROFILE',
        linke: '/dashboard/profile',
        svg: {
          src: 'assets/svgs/map-marker.svg',
          fill: '',
          stroke: '#757575'
        },
        subMenu: null
      },
      {
        title: 'DASHBOARD.MY_VEHICLE',
        linke: '/dashboard/my-vehicle',
        svg: {
          src: 'assets/svgs/map-marker.svg',
          fill: '',
          stroke: '#757575'
        },
      },
      {
        title: 'DASHBOARD.APPOINTMENT_HISTORY',
        linke: '/dashboard/apppointment-history',
        svg: {
          src: 'assets/svgs/map-marker.svg',
          fill: '',
          stroke: '#757575'
        },
        subMenu: null

      },
      {
        title: 'DASHBOARD.WALLET',
        linke: '/dashboard/wallet',
        svg: {
          src: 'assets/svgs/map-marker.svg',
          fill: '',
          stroke: '#757575'
        },
        subMenu: null
        // subMenu: {
        //   isEnabled: false,
        //   list: [
        //     {
        //       title: 'Menu Item 1',
        //       link: 'wallet'
        //     },
        //     {
        //       title: 'Menu Item 2',
        //       link: 'wallet'
        //     },
        //     {
        //       title: 'Menu Item 3',
        //       link: 'wallet'
        //     }
        //   ]
        // }
      },
    ],
    [
      {
        title: 'DASHBOARD.SETTINGS',
        linke: '',
        svg: {
          src: 'assets/svgs/map-marker.svg',
          fill: '',
          stroke: '#757575'
        },
        subMenu: {
          isEnabled: false,
          list: [],
          customList: [
            {
              title: 'DASHBOARD.BOOKING',
              key: 'sendBookingConfirmationNotification',
              value: true
            },
            {
              title: 'DASHBOARD.BOOKING_NOTIFICATION',
              key: 'sendBookingChangedNotification',
              value: true
            },
            {
              title: 'DASHBOARD.ORDER',
              key: 'sendOrderDeliveredNotification',
              value: true
            },
            {
              title: 'DASHBOARD.EMAIL',
              key: 'sendEmailNotification',
              value: true
            },
            {
              title: 'WIDGET.SMS',
              key: 'sendSMS',
              value: false
            }
          ]
        }
      },
      {
        title: 'DASHBOARD.HELP_ASIDE',
        linke: '/dashboard/help',
        svg: {
          src: 'assets/svgs/map-marker.svg',
          fill: '',
          stroke: '#757575'
        },
        subMenu: null
      }
    ]
  ];

  constructor(
    private multimediaService: MultimediaService,
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    let userDetails: any = isPlatformBrowser(this.platformId) ? localStorage.getItem('userDetails') : {};

    this.store.select(selectUserData).subscribe(data => {
      if (data) {
        this.userDetails = data
      } else {
        this.userDetails = userDetails ? JSON.parse(userDetails) : null;
      }

    })

    this.menus[1][0].subMenu.customList[0].value = this.userDetails.sendBookingConfirmationNotification || false;
    this.menus[1][0].subMenu.customList[1].value = this.userDetails.sendBookingChangedNotification || false;
    this.menus[1][0].subMenu.customList[2].value = this.userDetails.sendOrderDeliveredNotification || false;
    this.menus[1][0].subMenu.customList[3].value = this.userDetails.sendEmailNotification || false;
    this.menus[1][0].subMenu.customList[4].value = this.userDetails.sendSMSNotification || false;
  }


  updateFlags(item: any, val: any) {
    item.value = val;

    let payload = {
      SiteUsersID: this.userDetails?.siteUsersID || '',
      Status: item.value
    };
    this.multimediaService.getUserFlags(payload, item.key).subscribe((response) => {
      this.getUserByToken();
    });
  }

  getUserByToken(): void {
    // this.multimediaService.getUserByToken().subscribe(
    //   (user) => {
    //     localStorage.setItem('userDetails', JSON.stringify(user));
    //     this.getUserData();
    //   },
    //   (error) => {
    //     console.error('Error fetching users', error);
    //   }
    // );
    try {
      this.store.dispatch(beginLogin())
      this.getUserData();
    } catch (error) {
      // console.error('Error fetching users', error);
    }
  }

}
