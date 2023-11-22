import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: 'app-systems-and-regulations',
  templateUrl: './systems-and-regulations.component.html',
  styleUrls: ['./systems-and-regulations.component.scss']
})
export class SystemsAndRegulationsComponent {
  items: any = [];
  carousel: any = [];
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.ABOUT_US',
      path: '/about-us'
    },
    {
      title: "BREADCRUMB.SYSTEMS_AND_REGULATION",
      path: "/systems-and-regulations",
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
    this.getDetails();
  }

  getData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getSystemsAndRegulations()
      .subscribe((response) => {
        this.data = {
          title: {
            en: response.titleEN,
            ar: response.titleAR,
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR,
          },
          img: response.imageID,
          keywords: [],
        };
        this.updateBreadCrumb();
        this.carousel = this.data?.img
          ? [
            {
              image: this.data.img,
              video: null,
              title: this.data.title,
              description: this.data.description,
              link: "",
              paddingBottom: "pb-[61px]",
            },
          ]
          : [];
        this.updateMetaData();
        this.isSliderLoadingEnabled = false;
      });
  }
  getDetails() {
    this.isLoadingEnabled = true;
    this.multimediaService
      .getSystemsAndRegulationsDetails()
      .subscribe((response) => {
        this.items = (response || []).map((item: any) => {
          return {
            title: {
              en: item.titleEN,
              ar: item.titleAR
            },
            description: {
              en: item.descriptionEN,
              ar: item.descriptionAR
            },
            icon: item.iconID,
            file: item.fileID,
          }
        });
        this.updateBreadCrumb();
        this.carousel = this.data?.img
          ? [
            {
              image: this.data.img,
              video: null,
              title: this.data.title,
              description: this.data.description,
              link: "",
              paddingBottom: "pb-[61px]",
            },
          ]
          : [];
        this.updateMetaData();
        this.isLoadingEnabled = false;
      });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data?.title?.[this.lang] || "Systems and Regulations | Woqod",
      description:
        this.data?.description?.[this.lang] || "Systems and Regulations | Woqod",
      keywords: this.data?.keywords || ["Woqod", "Systems and Regulations"],
      img: this.data?.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data?.title?.[this.lang];
  }

}