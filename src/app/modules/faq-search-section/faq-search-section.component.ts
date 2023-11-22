import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';

@Component({
  selector: 'app-faq-search-section',
  templateUrl: './faq-search-section.component.html',
  styleUrls: ['./faq-search-section.component.scss']
})
export class FaqSearchSectionComponent {
  @Input() isMainSearch: boolean = false;
  keywords: any = [];
  tags: any = {
    en: [],
    ar: [],
  };
  @Output() closeSearchModal: EventEmitter<boolean> = new EventEmitter();
  @Output() changeKeyword: EventEmitter<string> = new EventEmitter();
  search: string = "";
  isSubmitted: boolean = false;
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
    let keywords = isPlatformBrowser(this.platformId) ? localStorage.getItem('keywords') : null;
    return keywords ? JSON.parse(keywords) : [];
  }

  saveNewKeyword() {
    let keywords = this.getSavedKeyword();
    if (!keywords.includes(this.search)) keywords.push(this.search);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('keywords', JSON.stringify(keywords));
    }
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
        this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/search-results?q=${this.search}&category=${'xxxx'}`));
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

  getFAQCategories() {
    this.multimediaService.getFAQCategories().subscribe((response: any) => {
      this.tags.en = (response || []).map((item: any) => {
        return {
          id: item.detailesId,
          title: item.nameEn,
          isSelected: false,
        };
      });

      this.tags.ar = (response || []).map((item: any) => {
        return {
          id: item.detailesId,
          title: item.nameAr,
          isSelected: false,
        };
      });
    });
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

  clearPreList() {
    this.searchResult[0].data = [];
  }

  onTyping(event: any) {
    this.searchResult[0].data = this.keywords.map((item: any) => { return { text: item, html: this.setHighlightMatched(item) } });
  }

}
