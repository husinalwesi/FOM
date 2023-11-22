import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  isCleanDesgin: boolean = true;
  isAppointment: boolean = true;
  iswallet: boolean = true;
  path: string = '';
  pageTitle: string = '';

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.detectPage();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.detectPage();
      }
    });
  }

  ngOnInit(): void {
    this.checkCleanDesign(this.location.path());
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event?.urlAfterRedirects;
        this.checkCleanDesign(path);
      }
    });

  }
  checkCleanDesign(path: string) {
    this.isCleanDesgin = path.split('/')[3] === "help";
    this.isAppointment = path.split('/')[3] === "apppointment-history";
  }

  detectPage() {
    const currentRoute = this.router.url;
    // 
    if (currentRoute.indexOf('home') !== -1) this.pageTitle = 'DASHBOARD.DASHBOARD';
    else if (currentRoute.indexOf('profile') !== -1) this.pageTitle = 'DASHBOARD.PROFILE';
    else if (currentRoute.indexOf('apppointment-history') !== -1) this.pageTitle = 'DASHBOARD.APPOINTMENT_HISTORY';
    else if (currentRoute.indexOf('steps-apppointment') !== -1) this.pageTitle = 'DASHBOARD.STEPS_APPOINTMENT';
    else if (currentRoute.indexOf('my-vehicle') !== -1) this.pageTitle = 'DASHBOARD.MY_VEHICLE';
    else if (currentRoute.indexOf('add-new-vehicle') !== -1) this.pageTitle = 'DASHBOARD.NEW_VEHICLE';
    else if (currentRoute.indexOf('wallet') !== -1) this.pageTitle = 'DASHBOARD.WALLET';
    else if (currentRoute.indexOf('help') !== -1) this.pageTitle = 'DASHBOARD.HELP_ASIDE';
  }

}
