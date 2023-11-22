import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  selector: 'app-five-zero-three',
  templateUrl: './five-zero-three.component.html',
  styleUrls: ['./five-zero-three.component.scss']
})
export class FiveZeroThreeComponent {

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService
  ) {

    this.metaTagsService.updateMetaTags({
      title: "Internal Server Error | Woqod",
      description: "Internal Server Error | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

  ngOnInit(): void {
  }

}
