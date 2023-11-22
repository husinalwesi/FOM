import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from 'rxjs';
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-investor-relations-details',
  templateUrl: './investor-relations-details.component.html',
  styleUrls: ['./investor-relations-details.component.scss']
})
export class InvestorRelationsDetailsComponent {
  private routerEventsSubscription: Subscription;
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "INVESTOR.RELATIONS",
      path: "/investor-relations",
    },
    {
      title: "",
      path: "",
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
  url: string = '';
  isModalEnabled: boolean = false
  personData: any;

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    // this.url = this.route.snapshot.paramMap.get("url");
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.url = this.route.snapshot.paramMap.get('url');
        this.getData();
      }
    });
  }

  // ngOnInit(): void {
  //   this.getData();
  // }

  getData() {
    this.url = this.route.snapshot.paramMap.get('url') || '';
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getInvestorRelationsDetailsMeta({ URL: '/investor-relations/' + this.url })
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
          fileGroupsList: response.fileGroupsList,
          details: {
            en: response.detailsEN,
            ar: response.detailsAR,
          },
          // membersList
          executiveManagement: (response.membersList || []).map((item: any) => {
            return {
              name: {
                en: item.nameEN || '',
                ar: item.nameAR || ''
              },
              position: {
                en: item.positionEN || '',
                ar: item.positionAR || ''
              },
              description: {
                en: item.descriptionEN || '',
                ar: item.descriptionAR || '',
              },
              image: item.imageID || ''
            };
          })
          // executiveManagement: [
          //   {
          //     name: {
          //       en: 'mr.saad rashid al-muhannadi',
          //       ar: 'mr.saad rashid al-muhannadi'
          //     },
          //     position: {
          //       en: 'managing director and CEO',
          //       ar: 'managing director and CEO'
          //     },
          //     description: {
          //       en: 'Saad Rashid Al-Muhannadi obtained BSC in Industrial & Systems Engineering from the University of Southern California (USC), LA. USA 1990.Saad joined Qatar',
          //       ar: 'Saad Rashid Al-Muhannadi obtained BSC in Industrial & Systems Engineering from the University of Southern California (USC), LA. USA 1990.Saad joined Qatar',
          //     },
          //     image: 'assets/images/1.png'
          //   },
          //   {
          //     name: {
          //       en: 'mr.saad rashid al-muhannadi',
          //       ar: 'mr.saad rashid al-muhannadi'
          //     },
          //     position: {
          //       en: null,
          //       ar: null
          //     },
          //     description: {
          //       en: 'Saeed Al-Kaabi has obtained a B.A in Business Studies/Insurance from Arkansas State University-USA and a Diploma in Finance from the University of California, Berkeley-USA.',
          //       ar: 'Saeed Al-Kaabi has obtained a B.A in Business Studies/Insurance from Arkansas State University-USA and a Diploma in Finance from the University of California, Berkeley-USA.',
          //     },
          //     image: 'assets/images/2.png'
          //   },
          //   {
          //     name: {
          //       en: 'MR. AHMED ALI MERZA',
          //       ar: 'MR. AHMED ALI MERZA'
          //     },
          //     position: {
          //       en: null,
          //       ar: null
          //     },
          //     description: {
          //       en: 'Worked in the Ministry of Municipality and Agriculture/Public Works Authority for 16 years.',
          //       ar: 'Worked in the Ministry of Municipality and Agriculture/Public Works Authority for 16 years.',
          //     },
          //     image: 'assets/images/3.png'
          //   },
          //   {
          //     name: {
          //       en: 'MR. FAHAD ABDULLAH AL-SUBAIEY',
          //       ar: 'MR. FAHAD ABDULLAH AL-SUBAIEY'
          //     },
          //     position: {
          //       en: null,
          //       ar: null
          //     },
          //     description: {
          //       en: '1991-2013: Mr. Al-Subaiey joined Qatar Petroleum & Qatar Petroleum International respectively. He held multiple roles in oil & gas industry, such as Gas Production Manager, and Gas Processing Manager',
          //       ar: '1991-2013: Mr. Al-Subaiey joined Qatar Petroleum & Qatar Petroleum International respectively. He held multiple roles in oil & gas industry, such as Gas Production Manager, and Gas Processing Manager',
          //     },
          //     image: 'assets/images/4.png'
          //   },
          //   {
          //     name: {
          //       en: 'MR. PRADEEP KUMAR',
          //       ar: 'MR. PRADEEP KUMAR'
          //     },
          //     position: {
          //       en: null,
          //       ar: null
          //     },
          //     description: {
          //       en: 'Mr. Pradeep Kumar, is a Commerce Graduate and has Professional qualifications such as ACA from Institute of Chartered Accountants of England and Wales (ICAEW), CPA from Australia',
          //       ar: 'Mr. Pradeep Kumar, is a Commerce Graduate and has Professional qualifications such as ACA from Institute of Chartered Accountants of England and Wales (ICAEW), CPA from Australia',
          //     },
          //     image: 'assets/images/5.png'
          //   },
          //   {
          //     name: {
          //       en: 'MR. MUBARAK ALI AL-BRIKI',
          //       ar: 'MR. MUBARAK ALI AL-BRIKI'
          //     },
          //     position: {
          //       en: null,
          //       ar: null
          //     },
          //     description: {
          //       en: 'Mr. AlBriki holds BEng Degree in Mechanical Engineering from Bradford University-UK as well as an Executive Master Degree in Business & Administration from University of Plymouth-UK.',
          //       ar: 'Mr. AlBriki holds BEng Degree in Mechanical Engineering from Bradford University-UK as well as an Executive Master Degree in Business & Administration from University of Plymouth-UK.',
          //     },
          //     image: 'assets/images/6.png'
          //   }

          // ]
        };
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
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  execModal(item: any) {
    if (item?.description[this.lang]) {
      this.isModalEnabled = true;
      this.personData = item
    }
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

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}
