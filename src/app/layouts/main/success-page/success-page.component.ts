import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { Router } from '@angular/router';
import { GUID } from 'src/app/const/guid';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent {
  breadCrumb: any = [];
  lang: string = "en";
  data: any = {
    title: {
      en: '',
      ar: ''
    },
    desc: {
      en: '',
      ar: ''
    },
  };

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private router: Router,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.updateMetaData();
    this.updateBreadCrumb();
    this.getStaticMessage();
  }

  getStaticMessage() {
    this.multimediaService.getStaticMessage({ ID: this.getMessageID() }).subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        desc: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
      };
    });
  }

  getMessageID() {
    const url = this.router.url || '';
    const pages = [
      {
        key: 'fahes/contact-us/feedback',
        id: GUID.fahes.success.feedback
      },
      {
        key: 'request-e-tag/success',
        id: GUID.woqod.success.requestETag
      },
      {
        key: 'kenar-shop/rent-shop/success',
        id: GUID.woqod.success.rentAShop
      },
      {
        key: 'become-a-supplier/success',
        id: GUID.woqod.success.becomeASupplier
      },
      {
        key: 'contact-us/feedback/success',
        id: GUID.woqod.success.feedback
      },
      {
        key: 'careers/career-job/success',
        id: GUID.woqod.success.jobApply
      },
      {
        key: 'tenders-and-supplier/tender-request/success',
        id: GUID.woqod.success.tenderRequest
      },
      {
        key: 'tenders-and-supplier/tender-alert/success',
        id: GUID.woqod.success.tenderAlert
      },
      {
        key: 'company-information/success',
        id: GUID.woqod.success.companyInformation
      }
    ];

    const data = pages.find(page => url.indexOf(page.key) !== -1);
    return data ? data.id : '';
  }

  updateBreadCrumb() {
    const url = this.router.url || '';
    const pages = [
      {
        key: 'fahes/contact-us/feedback',
        data: [
          {
            translate: 'BREADCRUMB.FAHES',
            url: '/fahes'
          },
          {
            translate: 'BREADCRUMB.FAHES_CONTACT_US',
            url: '/fahes/contact-us'
          },
          {
            translate: 'SHARED.Feedback',
            url: '/fahes/contact-us/feedback'
          }
        ]
      },
      // 
      {
        key: 'request-e-tag',
        data: [
          {
            translate: 'E_TAG.REQUEST_A_NEW_E_TAG',
            url: '/request-e-tag'
          }
        ]
      },
      // 
      {
        key: 'kenar-shop/rent-shop',
        data: [
          {
            translate: 'BREADCRUMB.KENAR_SHOP',
            url: '/kenar-shop'
          },
          {
            translate: 'KENAR.RENT_SHOP',
            url: '/kenar-shop/rent-shop'
          }
        ]
      },
      // 
      {
        key: 'become-a-supplier',
        data: [
          {
            translate: 'BREADCRUMB.BECOME_A_SUPPLIER',
            url: '/become-a-supplier'
          },
        ]
      },
      // 
      {
        key: 'contact-us/feedback',
        data: [
          {
            translate: 'BREADCRUMB.FAHES_CONTACT_US',
            url: '/contact-us'
          },
          {
            translate: 'SHARED.Feedback',
            url: '/contact-us/feedback'
          },
        ]
      },
      // 
      {
        key: 'careers/career-job',
        data: [
          {
            translate: 'BREADCRUMB.CAREERS',
            url: '/careers'
          },
          {
            translate: 'CAREER_LISTING.CAREER_JOB',
            url: '/careers/career-job'
          },
        ]
      },
      // 
      {
        key: 'tenders-and-supplier/tender-request',
        data: [
          {
            translate: 'BREADCRUMB.TENDERS_AND_SUPPLIER',
            url: '/tenders-and-supplier'
          },
          {
            translate: 'BREADCRUMB.TENDER_REQUEST',
            url: '#'
          },
        ]
      },
      //
      {
        key: 'tenders-and-supplier/tender-alert',
        data: [
          {
            translate: 'BREADCRUMB.TENDERS_AND_SUPPLIER',
            url: '/tenders-and-supplier'
          },
          {
            translate: 'BREADCRUMB.TENDER_ALERT',
            url: '#'
          },
        ]
      },
      // 
      {
        key: 'company-information',
        data: [
          {
            translate: 'SUPPLIER.COMPANY_INFORMATION',
            url: '#'
          },
        ]
      },
      // 
    ];


    const urlBreadcrumb = pages.find(page => url.indexOf(page.key) !== -1);

    this.breadCrumb = [];
    if (urlBreadcrumb) {
      urlBreadcrumb.data.forEach(item => {
        this.breadCrumb.push({
          title: item.translate,
          path: item.url
        });
      });
    }


    this.breadCrumb.push({
      title: 'BREADCRUMB.SUCCESS',
      path: ''
    });

  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: "Success | Woqod",
      description: "Success | Woqod",
      keywords: ["Woqod 1", "Woqod 2"],
      img: ''
    });
  }

}
