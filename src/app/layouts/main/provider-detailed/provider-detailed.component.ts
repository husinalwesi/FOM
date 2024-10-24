import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-provider-detailed',
  templateUrl: './provider-detailed.component.html',
  styleUrls: ['./provider-detailed.component.scss'],

  // imports: [ImageCropperComponent]
})
export class ProviderDetailedComponent {
  socialIcons: any = [
    {
      svg: 'assets/svgs/x.svg',
      size: 12,
      fill: '#ffffff',
      stroke: ''
    },
    {
      svg: 'assets/svgs/x.svg',
      size: 12,
      fill: '#ffffff',
      stroke: ''
    },
    {
      svg: 'assets/svgs/x.svg',
      size: 12,
      fill: '#ffffff',
      stroke: ''
    },
    {
      svg: 'assets/svgs/x.svg',
      size: 12,
      fill: '#ffffff',
      stroke: ''
    },
    {
      svg: 'assets/svgs/x.svg',
      size: 12,
      fill: '#ffffff',
      stroke: ''
    }
  ];
  starFill: number = 4;
  itemSelected: number = 1;
  list: any = [
    { title: 'Home', key: 'home', svg: 'verify' },
    { title: 'Manage your profile info', key: 'profile_info', svg: 'verify' },
    { title: 'Password and security', key: 'password_security', svg: 'verify' },
    { title: 'Personal details', key: 'personal_details', svg: 'verify' },
    { title: 'Notifications', key: 'notifications', svg: 'verify' },
    { title: 'Statistics', key: 'statistics', svg: 'verify' },
    { title: 'Upgrade your account', key: 'upgrade_account', svg: 'verify' },
    { title: 'Sign out', key: 'sign_out', svg: 'verify' },
  ];
  settingPage: boolean = false;

  reviewModalEnabled: boolean = false;

  isReview: boolean = false;
  writePermission: boolean = true;
  // posts: any = [];
  posts: any = [1, 2, 1, 2, 1];
  // cover: any = {
  //   w: 0,
  //   l: 0
  // };

  constructor(
    // private sanitizer: DomSanitizer,

    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService,
    // private resizeService: ResizeService,
    // private cdk: ChangeDetectorRef,
    private SharedService: SharedService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader();

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

}
