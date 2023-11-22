import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
// import { HeaderComponent } from 'src/app/modules/header/header.component';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { SharedService } from 'src/app/services/shared.service';
import { Store } from '@ngrx/store';
import { selectUserData } from 'src/app/store/user/user.selectors';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  isSubmitted: boolean = false;
  terms: any = {
    title: 'DASHBOARD.AGREE_WOQOD',
    name: 'terms',
    value: false
  };

  resoneForDeactivateDDL: any = {
    selected: null,
    placeholder: "DASHBOARD.RESONE_FOR_DEACTIVATE",
    list: [],
  };

  userDetails: any;
  @Input() isModalEnabled3: boolean = false;
  @Input() selectedStep: string = "Profile";
  @Input() list: any = [];
  @Output() tabClickk = new EventEmitter<string>();

  constructor(

  ) {
  }

  tabClickHandler(tabKey: string) {
    this.tabClickk.emit(tabKey);
  }
  // tabClick(title: string) {
  //   if (title === "Deactivate Account") {
  //     this.isModalEnabled3 = true;
  //   }
  // }

  ngOnInit(): void {
    // this.getUserData();
  }



}