import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lubricants-product-details',
  templateUrl: './lubricants-product-details.component.html',
  styleUrls: ['./lubricants-product-details.component.scss']
})
export class LubricantsProductDetailsComponent {
  private routerEventsSubscription: Subscription;
  id: string | null = "";
  isLoadingEnabled: boolean = false;
  selectedProduct: any = null;
  data: any = {};
  lang: string = "en"
  photoViewerImages: any = [];

  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: "BREADCRUMB.LUBRICANTS",
      path: "/lubricants",
    },
    {
      title: "",
      path: "/lubricants",
    },
  ]
  products: any = [];

  lubricantsData: any = null;
  relatedContents: any;

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private router: Router,
    private route: ActivatedRoute,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    // this.id = this.route.snapshot.paramMap.get('ID');

    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.GetLubricantCategoryByURL();
      }
    });
  }

  // ngOnInit(): void {
  //   this.GetLubricantCategoryByURL();
  // }

  GetLubricantCategoryByURL() {
    // open lubricant category Page 
    this.id = this.route.snapshot.paramMap.get('ID');
    this.multimediaService.GetLubricantCategoryByURL({ URL: '/lubricants/product/' + this.id })
      .subscribe((response) => {

        if (!response?.lubricantCategoryID) {
          this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
          return;
        }

        this.GetLubricantsDetailsByLubricantCategoryID(response.lubricantCategoryID);
        // 
        this.data = {
          title: {
            en: response.nameEN,
            ar: response.nameAR
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR
          }
        };

        this.lubricantsData = {
          title: {
            en: response.bottomTitleEN,
            ar: response.bottomTitleAR
          },
          desc: {
            en: response.bottomDescriptionEN,
            ar: response.bottomDescriptionAR
          },
          btnText: {
            en: response.bottomButtonTextEN,
            ar: response.bottomButtonTextAR
          },
          // img: response.bottomImageID,
          img: this.sharedService.isValidImage(response.productionAreaImageID) || this.sharedService.isValidImage(response.mobileImageID) || this.sharedService.isValidImage(response.bottomImageID),
          link: {
            en: response.bottomButtonURLEN || '',
            ar: response.bottomButtonURLAR || ''
          }
        }


        this.updateMetaData();
        this.updateBreadCrumb();
      },
        (error) => {
          this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        }
      );
  }

  GetLubricantsDetailsByLubricantCategoryID(id: string) {
    // list of products 
    this.multimediaService.GetLubricantsDetailsByLubricantCategoryID({ LubricantCategoryID: id })
      .subscribe((response) => {
        // this.GetLubricantsDetailsImagesByLubricantsDetailsId('daf70d45-8e05-4662-8080-5b63a06c2d4c', 0);
        if (response?.[0]) this.GetLubricantsDetailsImagesByLubricantsDetailsId(response[0].lubricantsDetailsID, 0);
        // 
        this.products = (response || []).map((item: any) => {
          return {
            id: item.lubricantsDetailsID,
            title: {
              en: item.productNameEN,
              ar: item.productNameAR
            },
            desc: {
              en: item.descriptionEN,
              ar: item.descriptionAR
            },
            img: item.productionAreaBottomImageID
          }
        });

      });
  }

  GetLubricantsDetailsImagesByLubricantsDetailsId(id: string, index: number) {
    // Product Images list 
    this.multimediaService.GetLubricantsDetailsImagesByLubricantsDetailsId({ LubricantsDetailsId: id })
      .subscribe((response) => {

        this.photoViewerImages = (response || []).slice(0, 4).map((item: any) => {
          return {
            id: item.imagesID,
            img: item.imageFileId,
            title: {
              en: item.titleEN,
              ar: item.titleAR
            },
            description: {
              en: item.descriptionEN,
              ar: item.descriptionAR
            }
          }
        });

        this.setImagesByProductIndex(index);
      });
  }


  setImagesByProductIndex(index: number) {
    this.selectedProduct = {
      selectedImage: this.photoViewerImages?.[0] || null,
      relatedProduct: this.products?.[index] || null,
    }
  }

  changeImage(data: any) {
    this.selectedProduct.selectedImage = data;
  }

  // 
  updateBreadCrumb() {
    this.breadCrumb[2].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Student Opportunities | Woqod",
      description:
        this.data.description[this.lang] || "Student Opportunities | Woqod",
      keywords: this.data.keywords || ["Woqod", "Student Opportunities"],
      img: '',
    });
  }

  onClick(index: number) {
    const productID = this.products[index].id;
    this.GetLubricantsDetailsImagesByLubricantsDetailsId(productID, index);
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}
