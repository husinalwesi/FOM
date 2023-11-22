import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-instagram-embed',
  templateUrl: './instagram-embed.component.html',
  styleUrls: ['./instagram-embed.component.scss']
})
export class InstagramEmbedComponent implements OnInit, AfterViewInit {

  constructor(
    private LoadAssetsService: LoadAssetsService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.LoadAssetsService.loadJSP('//static.elfsight.com/platform/platform.js', 'instagram-embed', () => {
        const iframe: any = document.querySelector('app-instagram-embed iframe');
        if (!iframe) return;
        iframe.setAttribute('title', 'Instagram Embed');
      }, false, '', true);
    }

  }

}
