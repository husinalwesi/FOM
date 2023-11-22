import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-investor-relations',
  templateUrl: './investor-relations.component.html',
  styleUrls: ['./investor-relations.component.scss']
})
export class InvestorRelationsComponent {
  carousel: any = [];
  breadCrumb: any = [

    {
      title: "INVESTORS.RELATIONS",
      path: "/investor relations",
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  metaData: any = {
    title: {
      en: '',
      ar: ''
    },
    description: {
      en: '',
      ar: ''
    },
  };
  data: any
  contactBox: any

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private LoadAssetsService: LoadAssetsService,
    private renderer: Renderer2,
    private el: ElementRef,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }


  loadEuroland() {
    const script = this.renderer.createElement('script');
    script.src = '//tools.euroland.com/tools/common/eurolandiframeautoheight/eurolandtoolsintegrationobject.js';
    script.onload = () => {
      this.callEurolandMethod();
    };
    this.renderer.appendChild(this.el.nativeElement, script);
  }

  callEurolandMethod() {
    if (typeof window !== 'undefined')
      if (typeof (window as any).EurolandToolIntegrationObject !== 'undefined') {
        const iframes = document.querySelectorAll("iframe");
        for (let index = 0; index < iframes.length; index++) {
          (window as any).EurolandToolIntegrationObject.set(iframes[index]);
        }
      }
  }


  ngAfterViewInit(): void {
  }

  getData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getInvestorRelationsMeta()
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
          marqueeIframe: {
            en: response.marqueeIframeEN,
            ar: response.marqueeIframeAR
          },
          pressReleaseIframe: {
            en: response.pressReleaseIframeEN,
            ar: response.pressReleaseIframeAR
          },
          contentBox: {
            en: response.contentBoxEN,
            ar: response.contentBoxAR
          },
          stockShareIframe: {
            en: response.stockShareIframeEN,
            ar: response.stockShareIframeAR
          },
          contentPages: response.contentPages,
          contentPagesTwo: response.contentPagesTwo,
          area1ContentTitle: {
            en: response.area1ContentTitleEN,
            ar: response.area1ContentTitleAR
          },
          area1ContentDescription: {
            en: response.area1ContentDescriptionEN,
            ar: response.area1ContentDescriptionAR
          },
          area2ContentTitle: {
            en: response.area2TitleEN,
            ar: response.area2TitleAR
          },
          area2ContentDescription: {
            en: response.area2DescriptionEN,
            ar: response.area2DescriptionAR
          },

        };
        this.contactBox = [
          {
            image: response.subscriptionBoxBgImage,
            icon: response.subscriptionBoxIcon,
            title: {
              en: response.subscriptionBoxTitleEN,
              ar: response.subscriptionBoxTitleAR
            },
            desc: {
              en: response.subscriptionBoxDescriptionEN,
              ar: response.subscriptionBoxDescriptionAR
            },
            btn: {
              text: {
                en: response.subscriptionBoxBtnTextEN,
                ar: response.subscriptionBoxBtnTextAR
              },
              modal: 'subscription'
              // link: {
              //   en: response[0].infoBox2ButtonURLEN,
              //   ar: response[0].infoBox2ButtonURLAR,
              // },
            },
            modalData: {
              en: response.subscriptionBoxBtnURLEN,
              ar: response.subscriptionBoxBtnURLAR
            }
          },
          {
            image: response.contactBoxBgImage,
            icon: response.contactBoxIcon,
            title: {
              en: response.contactBoxTitleEN,
              ar: response.contactBoxTitleAR,
            },
            desc: {
              en: response.contactBoxDescriptionEN,
              ar: response.contactBoxDescriptionAR,
            },
            btn: {
              text: {
                en: response.contactBoxBtnTextEN,
                ar: response.contactBoxBtnTextAR,
              },
              // modal: 'supplier'
              link: {
                en: response.contactBoxBtnURLEN,
                ar: response.contactBoxBtnURLAR
              },
            },
          },

        ];
        this.metaData = {
          title: {
            en: response.titleEN,
            ar: response.titleAR
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR
          },

        };
        this.updateBreadCrumb();
        this.carousel = this.sharedService.isValidImage(this.data?.img)
          ? [
            {
              image: this.data?.img,
              video: null,
              title: this.data?.title,
              description: this.data?.description,
              link: "",
              paddingBottom: "pb-[61px]",
              // titleSize: '60px',
              // descSize: '22px'
            },
          ]
          : [];
        this.updateMetaData();
        this.isSliderLoadingEnabled = false;
        setTimeout(() => {
          this.loadEuroland();
        });
      });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Investor Relations | Woqod",
      description:
        this.data.description[this.lang] || "Investor Relations | Woqod",
      keywords: this.data.keywords || ["Woqod", "Investor Relations"],
      img: this.data.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

}
