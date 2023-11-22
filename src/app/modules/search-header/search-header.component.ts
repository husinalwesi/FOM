import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {
  @Input() isMainSearch: boolean = false;
  @Input() lang: string = 'en';
  keywords: any = [];
  CategoryDDL: any = {
    selected: null,
    placeholder: 'SUPPLIER.ALL',
    list: []
  };
  tags: any = {
    en: [],
    ar: [],
  };
  @Output() closeSearchModal: EventEmitter<boolean> = new EventEmitter();
  @Output() changeKeyword: EventEmitter<string> = new EventEmitter();
  search: string = "";
  isSubmitted: boolean = false;
  @Input() isEnabled: boolean = false;
  isFirstTime: boolean = true;
  searchResult: any = [
    {
      key: 'SEARCH.HISTORY',
      data: []
    }
  ];

  constructor(
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private multimediaService: MultimediaService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.updateLocalSavedKeywords();
  }

  getSavedKeyword() {
    let keywords = typeof window !== 'undefined' ? localStorage.getItem('keywords') : '{}';
    return keywords ? JSON.parse(keywords) : [];
  }

  saveNewKeyword() {
    let keywords = this.getSavedKeyword();
    if (!keywords.includes(this.search)) keywords.push(this.search);
    if (isPlatformBrowser(this.platformId))
      localStorage.setItem('keywords', JSON.stringify(keywords));
    this.updateLocalSavedKeywords();
  }

  updateLocalSavedKeywords() {
    this.keywords = this.getSavedKeyword();
  }

  onSubmit(form: any) {
    this.isSubmitted = true;
    // hit the api
    if (form.valid) {
      this.saveNewKeyword();
      this.closeSearch();
      this.clearPreList();
      if (this.isMainSearch) {

        const url = this.routeLocalizationPipe.transform('/search-results?');
        const search = this.search ? `q=${this.search || ''}` : '';
        const category = this.CategoryDDL?.selected?.key && this.CategoryDDL?.selected?.key !== 'all' ? `&category=${this.CategoryDDL?.selected?.key || ''}` : '';


        this.router.navigateByUrl(url + search + category);


        // 
      } else {
        this.changeKeyword.emit(this.search);
      }
    } else {
      if (this.isMainSearch) {

      } else {
        this.changeKeyword.emit('');
        this.clearPreList();
      }
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getFAQCategories();
  }
  getFAQCategories() {
    this.multimediaService.getFAQListCategories().subscribe((response: any) => {
      this.CategoryDDL.list = (response || []).map((item: any) => {
        return {
          key: item.entitiesID,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
      this.CategoryDDL.list.unshift({
        key: 'all',
        title: { en: 'All Category', ar: 'جميع الفئات' }
      });
      this.CategoryDDL.selected = this.CategoryDDL.list[0];
    });
  }
  categoryChange(selected: any) {
    this.CategoryDDL.list = selected;
  }
  searchFire(keyword: string) {
    this.search = keyword;
    this.onSubmit({ valid: true });
  }

  setHighlightMatched(str: string) {
    const startIndex = str.toLowerCase().indexOf(this.search.toLowerCase());

    if (startIndex === -1) {
      return str;
    }

    const endIndex = startIndex + this.search.length;
    const highlightedText =
      str.substring(0, startIndex) +
      '<span class="font-Cairo-Bold text-[#011C35]">' +
      str.substring(startIndex, endIndex) +
      '</span>' +
      str.substring(endIndex);

    return highlightedText;
  }



  closeSearch() {
    this.closeSearchModal.emit(true);
  }

  closeSearchDirective() {
    if (this.isEnabled && !this.isFirstTime) {
      this.closeSearch();
    }
    this.isFirstTime = false;
  }

  clearPreList() {
    this.searchResult[0].data = [];
  }

  onTyping(event: any) {
    this.searchResult[0].data = this.keywords.map((item: any) => { return { text: item, html: this.setHighlightMatched(item) } });
  }

}
