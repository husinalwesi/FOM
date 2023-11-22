import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedService } from 'src/app/services/shared.service';
import { NewsState } from 'src/app/store/app.state';
import { getVisitedNews } from 'src/app/store/news/news.action';
import { selectVisitedNews } from 'src/app/store/news/news.selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() newsList: any = null;
  @Input() lang: string = 'en';
  visitedLinks: any[] = []
  constructor(
    private store: Store<NewsState>,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.store.select(selectVisitedNews).subscribe((news) => {
      this.visitedLinks = news.length > 0 ? news : []
    })
  }
  visitedLinkAdd(date: string): void {
    let id = Date.parse(date).toString()
    if (this.visitedLinks.length > 0) {
      if (this.visitedLinks.every(item => item !== id)) {
        this.visitedLinks = [...this.visitedLinks, id]
        this.store.dispatch(getVisitedNews({ news: this.visitedLinks }))
      }
    } else {
      this.store.dispatch(getVisitedNews({ news: [id.toString()] }))
    }
  }

  checkVisited(date: string) {
    let id = Date.parse(date).toString()
    return this.visitedLinks.every(item => item !== id);
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
