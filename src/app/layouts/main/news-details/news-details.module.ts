import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './news-details.component';
import { NewsDetailsRoutingModule } from './news-details-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { RelatedNewsModule } from 'src/app/modules/related-news/related-news.module';
import { SocailMediaIconsNewsModule } from 'src/app/modules/socail-media-icons-news/socail-media-icons-news.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ModalModule } from 'src/app/modules/modal/modal.module';

@NgModule({
  declarations: [
    NewsDetailsComponent,],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule,
    TranslationModule,
    SvgModule,
    BreadcrumbSectionSecondStyleModule,
    BtnOneModule,
    RelatedNewsModule,
    SocailMediaIconsNewsModule,
    DetailedBodyModule,
    LazyLoadImageModule,
    ModalModule
  ]
})
export class NewsDetailsModule { }
