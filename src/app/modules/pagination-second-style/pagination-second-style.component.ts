import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-second-style',
  templateUrl: './pagination-second-style.component.html',
  styleUrls: ['./pagination-second-style.component.scss']
})
export class PaginationSecondStyleComponent {
  totalPages: number = 0;
  @Input() data: any = null;
  paginationItems: any = [];
  @Output() changePage: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    if (this.data) this.calculatePaginationPages(this.data.totalCount, this.data.pageSize);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) this.calculatePaginationPages(this.data.totalCount, this.data.pageSize);
  }

  calculatePaginationPages(total: number, perPage: number) {
    let pages = Math.ceil(total / perPage);
    this.totalPages = pages ? pages : 1;
    this.paginationItems = this.pagination(this.data.pageIndex, this.totalPages);
  }

  pagination(c: any, m: any) {
    var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('dots');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }

  selectPage(pageIteration: number) {
    if (this.data.pageIndex !== pageIteration) this.changePage.emit(pageIteration);
  }

  prevPage() {
    let tempPageIndex = this.data.pageIndex - 1;
    if (tempPageIndex < 1) tempPageIndex = 1;
    this.selectPage(tempPageIndex);
  }

  nextPage() {
    let tempPageIndex = this.data.pageIndex + 1;
    if (tempPageIndex > this.totalPages) tempPageIndex = this.totalPages;
    this.selectPage(tempPageIndex);
  }

}
