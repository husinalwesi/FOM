import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-twitter-embed',
  templateUrl: './twitter-embed.component.html',
  styleUrls: ['./twitter-embed.component.scss']
})
export class TwitterEmbedComponent implements OnInit, AfterViewInit {
  key: string = 'QatarFuel_Woqod?ref_src=twsrc%5Etfw';
  constructor(
    private LoadAssetsService: LoadAssetsService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.LoadAssetsService.loadJSP('//platform.twitter.com/widgets.js', 'twitter-embed', () => {
        (<any>window).twttr.widgets.load();
      }, false, 'utf-8', true);
    }

  }


}
