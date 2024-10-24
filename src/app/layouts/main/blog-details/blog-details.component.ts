import { ChangeDetectorRef, Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  socialIcons: any = [
    {
      svg: 'assets/svgs/x.svg',
      size: 16,
      fill: '#ffffff',
      stroke: ''
    },
    {
      svg: 'assets/svgs/x.svg',
      size: 16,
      fill: '#ffffff',
      stroke: ''
    },
    {
      svg: 'assets/svgs/x.svg',
      size: 16,
      fill: '#ffffff',
      stroke: ''
    },
    {
      svg: 'assets/svgs/x.svg',
      size: 16,
      fill: '#ffffff',
      stroke: ''
    },
    {
      svg: 'assets/svgs/x.svg',
      size: 16,
      fill: '#ffffff',
      stroke: ''
    }
  ];
  constructor(
    private pageTransitionsService: PageTransitionsService,
    private metaTagsService: MetaTagsService,
    private headerService: HeaderService,

    private resizeService: ResizeService,
    private cdr: ChangeDetectorRef,

    private SharedService: SharedService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(true);

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
