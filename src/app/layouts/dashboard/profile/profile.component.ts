import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  selectedStep = '';
  // id: string | null = "";
  @Input() isModalEnabled3: boolean = false;
  list: any = [
    {
      title: 'DASHBOARD.PROFILE',
      key: 'profile'
    },
    {
      title: 'DASHBOARD.MY_WALLET',
      key: 'wallet'
    },
  ]
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe
  ) {
    // this.id = this.route.snapshot.paramMap.get('ID');
    // this.translate.onLangChange.subscribe(data => {
    //   setTimeout(() => {
    //     this.metaTagsService.updateMetaTags({
    //       title: "Profile Page | Woqod",
    //       description: "Profile Page | Woqod",
    //       keywords: ["Woqod 1", "Woqod 2"]
    //     });
    //   });
    // });

    this.metaTagsService.updateMetaTags({
      title: "Profile Page | Woqod",
      description: "Profile Page | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

  ngOnInit(): void {
    if (this.router.url.indexOf("dashboard/profile") !== -1) {
      this.selectedStep = 'profile'
    }
    else if (this.router.url.indexOf("dashboard/wallet") !== -1) {
      this.selectedStep = 'wallet'
    }
  }
  changeTab(tabKey: string) {
    this.selectedStep = tabKey;
    this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/dashboard/${tabKey}`));
  }
}
