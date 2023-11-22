import { isPlatformBrowser } from "@angular/common";
import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { PlaceholderImgService } from "src/app/services/placeholder-img.service";

@Component({
  selector: 'app-fahes-home',
  templateUrl: './fahes-home.component.html',
  styleUrls: ['./fahes-home.component.scss']
})
export class FahesHomeComponent {
  lang: string = "en";
  isBrowser: boolean = false;
  isNewsLoadingEnabled: boolean = true;
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  fahesInNumbersMainData: any;
  newsMainData: any = {
    title: {
      en: '',
      ar: ''
    },
    viewAllText: {
      en: '',
      ar: ''
    },
    viewAllURL: ''
  };
  slidesStore: any = [];
  bottomSection: any = [];
  slidesStore2: any = [];
  aboutUs: any = {
    heading: {
      title: {
        en: '',
        ar: ''
      },
      description: {
        en: '',
        ar: ''
      }
    },
    cards: []
  };
  newsList: any = [];
  items: any = [];

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private placeholderImgService: PlaceholderImgService,
    private cdk: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.lang = this.TranslationService.getSelectedLanguage();
  }



  ngOnInit(): void {
    this.getData();
    this.getFahesHomePageService();
    this.getFahesHomePageNews();
  }
  // getFahesHomePgeSerive
  getData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getFahesHomePageMeta().subscribe((response) => {
      this.getFahesSlider();
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR,
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR,
        },
        keywords: [],
      };

      this.aboutUs = {
        heading: {
          title: {
            en: response.area1Heading1EN,
            ar: response.area1Heading1AR
          },
          description: {
            en: response.area1Heading1ContentEN,
            ar: response.area1Heading1ContentAR
          }
        },
        cards: [
          {
            title: {
              en: response.area1Heading2EN,
              ar: response.area1Heading2AR
            },
            description: {
              en: response.area1Heading2ContentEN,
              ar: response.area1Heading2ContentAR
            }
          },
          {
            title: {
              en: response.area1Heading3EN,
              ar: response.area1Heading3AR
            },
            description: {
              en: response.area1Heading3ContentEN,
              ar: response.area1Heading3ContentAR
            }
          },
          {
            title: {
              en: response.area1Heading4EN,
              ar: response.area1Heading4AR
            },
            description: {
              en: response.area1Heading4ContentEN,
              ar: response.area1Heading4ContentAR
            }
          }
        ]
      };

      this.newsMainData = {
        title: {
          en: response.area2HeadingEN,
          ar: response.area2HeadingAR
        },
        viewAllText: {
          en: response.area2URLTextEN,
          ar: response.area2URLTextAR
        },
        viewAllURL: response.area2URL
      };

      this.fahesInNumbersMainData = {
        title: {
          en: response.area3Heading1EN,
          ar: response.area3Heading1AR
        },
        experience: {
          en: response.area3Heading2EN,
          ar: response.area3Heading2AR
        },
        description: {
          en: response.area3Heading2TextEN,
          ar: response.area3Heading2TextAR
        },
      };

      this.items = [
        {
          topColor: '#fff',
          svg: response.area3Col1Icon,
          fill: '',
          stroke: '#ffffff',
          title: {
            en: response.area3Col1TitleEN,
            ar: response.area3Col1TitleAR
          },
          description: {
            en: response.area3Col1DescriptionEN,
            ar: response.area3Col1DescriptionAR
          },
          statistic: {
            en: response.area3Col1IconTextEN,
            ar: response.area3Col1IconTextAR,
          },
          topBgColor: '#F89828',
          bottomBgColor: '#ffffff',
          textColor: '#000'
        },
        {
          topColor: '#000',
          svg: response.area3Col2Icon,
          fill: '',
          stroke: '#fffff',
          title: {
            en: response.area3Col2TitleEN,
            ar: response.area3Col2TitleAR
          },
          description: {
            en: response.area3Col2DescriptionEN,
            ar: response.area3Col2DescriptionAR
          },
          statistic: {
            en: response.area3Col2IconTextEN,
            ar: response.area3Col2IconTextAR,
          },
          topBgColor: '',
          bottomBgColor: '#00428B',
          textColor: '#fff'

        },
        {
          topColor: '#fff',
          svg: response.area3Col3Icon,
          fill: '',
          stroke: '#ffffff',
          title: {
            en: response.area3Col3TitleEN,
            ar: response.area3Col3TitleAR
          },
          description: {
            en: response.area3Col3DescriptionEN,
            ar: response.area3Col3DescriptionAR
          },
          statistic: {
            en: response.area3Col3IconTextEN,
            ar: response.area3Col3IconTextAR,
          },
          topBgColor: '#009D57',
          bottomBgColor: '#ffffff',
          textColor: '#000'
        },
        {
          topColor: '#000',
          svg: response.area3Col4Icon,
          fill: '',
          stroke: '#000',
          title: {
            en: response.area3Col4TitleEN,
            ar: response.area3Col4TitleAR
          },
          description: {
            en: response.area3Col4DescriptionEN,
            ar: response.area3Col4DescriptionAR
          },
          statistic: {
            en: response.area3Col4IconTextEN,
            ar: response.area3Col4IconTextAR,
          },
          topBgColor: '#fff',
          bottomBgColor: '#B30838',
          textColor: '#fff'
        },
      ];
      this.isLoadingEnabled = false;
    });
  }

  getFahesHomePageNews() {
    this.isNewsLoadingEnabled = true;
    this.multimediaService.getFahesHomePageNews().subscribe((response) => {

      const originalArray = (response || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item?.descriptionEN,
            ar: item.descriptionAR
          },
          link: `/fahes/media-center/news-details/${item.fahesNewsDetailsID}`,
          date: item.newsDate ? new Date(item.newsDate) : null,
        }
      });



      // Initialize two empty arrays
      const firstArray = [];
      const secondArray = [];

      // Loop through the original array
      for (let i = 0; i < originalArray.length; i++) {
        // Check if the current index is even or odd
        if (i % 2 === 0) {
          // Even index, push to the first array
          firstArray.push(originalArray[i]);
        } else {
          // Odd index, push to the second array
          secondArray.push(originalArray[i]);
        }
      }

      this.newsList = [firstArray, secondArray];

      this.isNewsLoadingEnabled = false;
    });
  }
  getFahesHomePageService() {
    this.isNewsLoadingEnabled = true;
    this.multimediaService.getFahesHomePageSerive().subscribe((response) => {
      const temp = (response || []).map((item: any) => {
        return {
          id: item.fahesServicesDetailID,
          image: item.bodyImageID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          link: item.pageURL || '',
        }
      });
      this.slidesStore2 = this.groupArrayItems(temp);
      this.isNewsLoadingEnabled = false;
    });
  }

  groupArrayItems(array: any) {
    const result = [];
    for (let i = 0; i < array.length; i += 2) {
      result.push(array.slice(i, i + 2));
    }
    return result;
  }
  getFahesSlider() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getFahesHomePageContent().subscribe((response) => {
      this.slidesStore = (response || []).slice(0, 8).map((item: any) => {
        return {
          id: item.fahesContentPagesID,
          image: item.imageID,
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          link: item.pageURL || '',
        }
      });


      this.bottomSection = (response || []).map((item: any, index: number) => {
        return {
          selected: index === 0,
          id: item.fahesContentPagesID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
        }
      });
      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }

  tabChange(index: number) {
    for (let index2 = 0; index2 < this.bottomSection.length; index2++) {
      this.bottomSection[index2].selected = false;
    }
    // un select others
    this.bottomSection[index].selected = true;
    this.cdk.detectChanges();
  }
  updateMetaData() {
    // const item = this.slidesStore.find((item: any) => item.image[this.lang]) || {};
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Fahes Home Page | Fahes",
      description: this.data.description[this.lang] || "Fahes Home Page | Fahes",
      keywords: this.data.keywords || ["Fahes", "Fahes Home Page"],
      img: this.slidesStore[0]?.image,
      // img: item?.image?.[this.lang] || ''
    });
  }
}
