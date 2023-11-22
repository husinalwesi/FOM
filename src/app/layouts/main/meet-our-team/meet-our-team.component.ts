import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-meet-our-team',
  templateUrl: './meet-our-team.component.html',
  styleUrls: ['./meet-our-team.component.scss']
})
export class MeetOurTeamComponent {
  carousel: any = [];
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.CAREERS',
      path: '/careers'
    },
    {
      title: 'BREADCRUMB.MEET_OUR_TEAM',
      path: '/careers/meet-our-team'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  data: any = null;
  teamMembers: any = [];
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }

  getTeamMembers(id: string) {
    this.multimediaService.getTeamMembers({ id: id }).subscribe((response) => {
      this.teamMembers = (response || []).map((item: any) => {
        return {
          title: {
            en: item.nameEN,
            ar: item.nameAR
          },
          desc: {
            en: item.positionEN,
            ar: item.positionAR
          },
          img: item.imageID,
        }
      });
    });
  }

  getData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getContentPageByIDetaData('meet-our-team').subscribe((response) => {
      this.getTeamMembers(response.careersContentPagesID);
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        body: {
          en: response.detailsEN,
          ar: response.detailsAR
        },
        img: response.mainImageID,
        keywords: []
      };
      this.updateBreadCrumb();
      this.carousel = this.data.img ? [
        {
          image: this.data.img,
          video: null,
          title: this.data.title,
          description: this.data.description,
          link: "",
          paddingBottom: 'pb-[61px]',
        }
      ] : [];
      this.updateMetaData();
      this.isLoadingEnabled = false;
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Meet Our Team | Woqod",
      description: this.data.description[this.lang] || "Meet Our Team | Woqod",
      keywords: this.data.keywords || ["Woqod", "Meet Our Team"],
      img: this.data.img
    });
  }

}
