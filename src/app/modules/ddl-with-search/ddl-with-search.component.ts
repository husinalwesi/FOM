import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ddl-with-search',
  templateUrl: './ddl-with-search.component.html',
  styleUrls: ['./ddl-with-search.component.scss']
})
export class DdlWithSearchComponent {
  @Output() locationChangeEmitter: EventEmitter<any> = new EventEmitter();

  isMenuEnabled: boolean = false;
  @Input() addresses: any = {
    selected: [],
    data: []
  };

  searchResult: any = [

    {
      key: 'SEARCH.HISTORY',
      data: []
    }
  ];

  search: string = "";
 

  filterDDL: any = {
    selected: null,
    placeholder: '',
    list: [
      {
        key: 'Show All',
        title: {
          en: 'PLACEHOLDER.SHOW_ALL',
          ar: 'PLACEHOLDER.SHOW_ALL'
        }
      },
      {
        key: 'Active only',
        title: {
          en: 'PLACEHOLDER.ACTIVE_ONLY',
          ar: 'PLACEHOLDER.ACTIVE_ONLY'
        }
      },
      {
        key: 'Nearest',
        title: {
          en: 'PLACEHOLDER.NEARSET',
          ar: 'PLACEHOLDER.NEARSET'
        }
      },
      {
        key: 'Newly added',
        title: {
          en: 'PLACEHOLDER.NEWLY_ADDED',
          ar: 'PLACEHOLDER.NEWLY_ADDED'
        }
      }
    ]
  };

  filterChange(option: any) {
    this.filterDDL.selected = option;
  }

  removeLocation(index: number) {
    this.addresses.selected = this.removeElementByIndex(this.addresses.selected, index);
    this.emitSelection();
  }

  removeElementByIndex(array: any, index: number) {
    if (index >= 0 && index < array.length) {
      array.splice(index, 1);
      return array;
    } else {
      console.log("Invalid index");
      return array; // Return the original array if index is invalid
    }
  }

  searchFire(keyword: string) {
    this.addresses.selected.push(keyword);
    this.isMenuEnabled = false;
    this.search = '';
    this.emitSelection();
  }

  emitSelection() {
    this.locationChangeEmitter.emit(this.addresses.selected);
  }

  clearPreList() {
    this.searchResult[0].data = [];
  }

  onTyping(event: any) {
    this.isMenuEnabled = true;
    this.searchResult[0].data = this.addresses.data.filter((item: any) => item.toLowerCase().indexOf(this.search.toLowerCase()) !== -1).map((item: any) => { return { text: item, html: this.setHighlightMatched(item) } });
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

}
