import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  pageTitle: string = '';
  constructor(
    private router: Router
  ) {
    this.detectPage();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.detectPage();
      }
    });
  }

  detectPage() {
    const currentRoute = this.router.url;
    // 
    if (currentRoute.indexOf('home') !== -1) this.pageTitle = 'DASHBOARD.DASHBOARD';
    else if (currentRoute.indexOf('profile') !== -1) this.pageTitle = 'Profile';
    else if (currentRoute.indexOf('apppointment-history') !== -1) this.pageTitle = 'Apppointment History';
    else if (currentRoute.indexOf('steps-apppointment') !== -1) this.pageTitle = 'Steps Apppointment';
    else if (currentRoute.indexOf('my-vehicle') !== -1) this.pageTitle = 'My Vehicle';
    else if (currentRoute.indexOf('add-new-vehicle') !== -1) this.pageTitle = 'Add New Vehicle';
    else if (currentRoute.indexOf('wallet') !== -1) this.pageTitle = 'Wallet';
    else if (currentRoute.indexOf('help') !== -1) this.pageTitle = 'Help';
  }

}
