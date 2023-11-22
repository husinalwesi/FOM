import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { ImageSourcePipe } from 'src/app/pipes/image-source.pipe';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-hero-bg-half',
  templateUrl: './hero-bg-half.component.html',
  styleUrls: ['./hero-bg-half.component.scss']
})
export class HeroBgHalfComponent {
  // 

  lang: string = "en";
  @Input() height: number = 0;
  @Input() fullView: boolean = false;
  @Input() data: any;

  constructor(
    private translate: TranslateService,
    private translationService: TranslationService,
    private imageSourcePipe: ImageSourcePipe,
    private sharedService: SharedService,
    private resizeServices: ResizeService
  ) {
    this.lang = this.translationService.getSelectedLanguage();
  }

  getImage() {
    const desktopImage = this.sharedService.isValidImage(this.data?.image) || '';
    const mobileImage = this.sharedService.isValidImage(this.data?.mobileImage) || '';

    if (desktopImage || mobileImage) {
      const image = this.resizeServices.isMobile() ? this.imageSourcePipe.transform(mobileImage) || this.imageSourcePipe.transform(desktopImage) : this.imageSourcePipe.transform(desktopImage) || this.imageSourcePipe.transform(mobileImage);
      return `url('${image}')`;
    }
    return "";
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}

export interface IHeroBG {
  image: string | null,
  video: string | null,
  title: ILocale,
  titleSize: String | null,
  description: ILocale,
  descSize: String | null,
  link: string,
  paddingBottom: string,
};

export interface ILocale {
  [key: string]: string;
};