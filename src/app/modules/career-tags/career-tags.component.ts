import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-career-tags',
  templateUrl: './career-tags.component.html',
  styleUrls: ['./career-tags.component.scss']
})
export class CareerTagsComponent {
  @Output() onTagsSelectionChange: EventEmitter<any> = new EventEmitter();
  @Input() lang: string = "en";
  @Input() tags: any;


  constructor(
    private translate: TranslateService,
  ) {
  }

  moreTags() {
    // alert("more tags request!");
  }

  tagsSelectionChange(data: any) {
    this.onTagsSelectionChange.emit(data);
  }

}
