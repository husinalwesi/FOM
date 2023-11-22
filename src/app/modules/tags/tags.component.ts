import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Input() tags: any;
  @Output() onTagsSelectionChange: EventEmitter<any> = new EventEmitter();
  @Input() lang: string = "en";
  isTagSingleSelect: boolean = true;

  toggleTag(tag: any) {
    if (this.isTagSingleSelect) {
      for (let index = 0; index < this.tags.en.length; index++) {
        if (this.tags.en[index].id !== tag.id) this.tags.en[index].isSelected = false;
      }
      // 
      if (this.isTagSingleSelect) {
        for (let index = 0; index < this.tags.ar.length; index++) {
          if (this.tags.ar[index].id !== tag.id) this.tags.ar[index].isSelected = false;
        }
      }
    }

    tag.isSelected = !tag.isSelected;
    this.onTagsSelectionChange.emit({ en: this.tags.en.filter((tag: any) => tag.isSelected).map((tag: any) => tag.id), ar: this.tags.ar.filter((tag: any) => tag.isSelected).map((tag: any) => tag.id) });
  }

}
