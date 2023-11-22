import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-faq',
  templateUrl: './filter-faq.component.html',
  styleUrls: ['./filter-faq.component.scss']
})
export class FilterFaqComponent {
  @Output() onTagsSelectionChange: EventEmitter<any> = new EventEmitter();
  @Output() changeCategory: EventEmitter<any> = new EventEmitter();
  lang: string = "en";
  isSubmitted: boolean = false;
  @Input() CategoryDDL: any = {};
  @Input() tags: any = {
    en: [],
    ar: []
  };


  tagsSelectionChange(selections: any) {
    this.onTagsSelectionChange.emit(selections);
  }

  categoryChange(option: any) {
    this.changeCategory.emit(option);
  }

}
