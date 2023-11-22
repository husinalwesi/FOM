import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.sharedService.enableFullLoader();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const LANGUAGE: string = localStorage.getItem('LANGUAGE') || '';
      localStorage.clear();
      localStorage.setItem('LANGUAGE', LANGUAGE);
      // this.router.navigateByUrl(this.routeLocalizationPipe.transform(``));
      if (typeof window !== 'undefined')
        window.location.href = window.location.origin;
    }
  }

}
