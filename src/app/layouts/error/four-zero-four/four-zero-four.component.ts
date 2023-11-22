import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  selector: 'app-four-zero-four',
  templateUrl: './four-zero-four.component.html',
  styleUrls: ['./four-zero-four.component.scss']
})
export class FourZeroFourComponent {

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService
  ) {

    this.metaTagsService.updateMetaTags({
      title: "Page Not Found | Woqod",
      description: "Page Not Found | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

  ngOnInit(): void {
  }

}
