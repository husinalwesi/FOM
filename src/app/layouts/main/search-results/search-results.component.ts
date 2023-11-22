import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PlaceholderImgService } from 'src/app/services/placeholder-img.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  tags: any = {
    en: [],
    ar: []
  };
  searchTerm: any = '';
  CategoryDDL: any = {
    selected: null,
    placeholder: 'FEEDBACK.SELECT_CATEGORY',
    list: []
  };
  lang: string = 'en';
  isLoadingEnabled: boolean = true;
  shareThis: string = 'SHARE_BREADCRUMB.SHARE_THIS';
  searchResult: any = {
    pagination: {
      pageSize: 10,
      pageIndex: 1,
      totalCount: 0
    },
    data: [],
  };
  image: string;

  breadCrumb: any = [
    {
      title: 'BREADCRUMB.SEARCH_RESULT',
      path: '/search-results'
    }
  ];

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private placeholderImgService: PlaceholderImgService,
    private TranslationService: TranslationService,
    private multimediaService: MultimediaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the 'q' parameter is present in the URL
        const queryParams = this.route.snapshot.queryParams;
        if (queryParams.q) {
          this.searchTerm = queryParams.q;
          this.getSearchItem();
          this.searchResult.pagination.pageIndex = 1;
        }
      }
    });

    this.metaTagsService.updateMetaTags({
      title: 'Search Results Page | Woqod',
      description: 'Search Results Page | Woqod',
      keywords: ['Woqod 1', 'Woqod 2'],
      img: ''
    });

    this.image = this.placeholderImgService.generatePlaceholderImage(254, 648, '31343c', 'ffffff');
  }

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParams?.q || '';
    // Set the default value for CategoryDDL.selected to null
    // this.CategoryDDL.selected = '';
    this.getFAQCategories();
  }

  getSearchItem() {
    this.isLoadingEnabled = true;
    let payload: any = {
      PageSize: this.searchResult.pagination.pageSize,
      PageNumber: this.searchResult.pagination.pageIndex,
      SearchTerm: this.searchTerm
    };

    // If CategoryDDL.selected is null, do not specify CategoryID in the payload
    if (this.CategoryDDL?.selected?.key && this.CategoryDDL?.selected?.key !== 'all') {
      payload.CategoryID = this.CategoryDDL.selected.key;
    }

    this.multimediaService.getSearchItem(payload).subscribe((response) => {
      this.searchResult.pagination.totalCount = response.totalCount;
      this.searchResult.data = (response.pageItems || []).map((item: any) => ({
        id: item.id,
        title: { en: item.titleEN, ar: item.titleAR },
        desc: { en: item.descriptionEN, ar: item.descriptionAR },
        link: item.pageURL || ''
      }));
      this.isLoadingEnabled = false;
    });
  }



  tagsSelectionChange(selections: any) {
    this.CategoryDDL.list = selections;
    this.getSearchItem();
  }

  changePage(pageNo: number) {
    this.searchResult.pagination.pageIndex = pageNo;
    this.getSearchItem();
  }

  getFAQCategories() {
    this.multimediaService.getFAQListCategories().subscribe((response: any) => {
      this.CategoryDDL.list = (response || []).map((item: any) => ({
        key: item.entitiesID,
        title: { en: item.nameEn, ar: item.nameAr }
      }));

      this.CategoryDDL.list.unshift({
        key: 'all',
        title: { en: 'All Category', ar: 'جميع الفئات' }
      });

      const category = this.route.snapshot.queryParams?.category || '';
      if (category) {
        this.CategoryDDL.selected = this.CategoryDDL.list.find((item: any) => item.key === category);
      } else {
        this.CategoryDDL.selected = this.CategoryDDL.list[0];
      }
      this.getSearchItem();
    });
  }

}
