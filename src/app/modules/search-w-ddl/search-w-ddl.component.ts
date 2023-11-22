import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-w-ddl',
  templateUrl: './search-w-ddl.component.html',
  styleUrls: ['./search-w-ddl.component.scss']
})
export class SearchWDdlComponent {
  @Output() ddlChangeEmiter: EventEmitter<any> = new EventEmitter();
  @Output() KeywordChange: EventEmitter<any> = new EventEmitter();
  @Input() keyword: string = '';
  @Input() ddlHeight: string = "h-[28px]";
  @Input() inputTitle: string = "";
  @Input() mainClasses: string = "h-10";
  @Input() ddl: any = {
    selected: null,
    placeholder: 'E_TAG.CAR',
    list: []
  };
  ddlChange(option: any) {
    // this.ddl.selected = option;
    this.ddlChangeEmiter.emit(option);
  }

  filterByKeyword() {
    this.KeywordChange.emit(this.keyword);
  }
}
