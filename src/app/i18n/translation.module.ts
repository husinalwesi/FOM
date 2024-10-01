import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { RouteLocalizationPipe } from '../pipes/route-localization.pipe';
import { IntersectionObserverDirective } from '../directives/intersection-observer.directive';
// import { ImageSourcePipe } from '../pipes/image-source.pipe';
// import { VideoSourcePipe } from '../pipes/video-source.pipe';
// import { FacebookPipe } from '../pipes/social/facebook.pipe';
// import { LinkedinPipe } from '../pipes/social/linkedin.pipe';
// import { TwitterPipe } from '../pipes/social/twitter.pipe';
// import { PinterestPipe } from '../pipes/social/pinterest.pipe';
// import { PluralPipe } from '../pipes/plural.pipe';
// import { FilePipe } from '../pipes/file.pipe';
// import { MailToPipe } from '../pipes/social/mail-to.pipe';
// import { PdfPipe } from '../pipes/pdf.pipe';
// import { CutTextPipe } from '../pipes/cut-text.pipe';

@NgModule({
  // ImageSourcePipe, VideoSourcePipe, FacebookPipe, TwitterPipe, LinkedinPipe, PinterestPipe, PluralPipe, FilePipe, MailToPipe, PdfPipe, CutTextPipe
  declarations: [RouteLocalizationPipe, IntersectionObserverDirective],
  imports: [CommonModule, TranslateModule],

  // ImageSourcePipe, VideoSourcePipe, FacebookPipe, TwitterPipe, LinkedinPipe, PinterestPipe, PluralPipe, FilePipe, MailToPipe, PdfPipe, CutTextPipe
  exports: [CommonModule, TranslateModule, RouteLocalizationPipe, IntersectionObserverDirective],

  // ImageSourcePipe, VideoSourcePipe, FacebookPipe, TwitterPipe, LinkedinPipe, PinterestPipe, PluralPipe, FilePipe, MailToPipe, PdfPipe, CutTextPipe
  providers: [TranslatePipe, RouteLocalizationPipe]
})
export class TranslationModule { }
