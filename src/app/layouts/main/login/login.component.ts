import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    const currentUser = isPlatformBrowser(this.platformId) ? !!localStorage.getItem('token') : false;//is user logged in
    if (currentUser) {
      this.sharedService.enableFullLoader();
    } else {
      this.sharedService.disableFullLoader();
      this.router.navigateByUrl(this.routeLocalizationPipe.transform(''));
    }
  }

}
