import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventImagesComponent } from './event-images.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { ModalModule } from '../modal/modal.module';
import { SocailMediaIconsNewsModule } from '../socail-media-icons-news/socail-media-icons-news.module';
import { NoDataModule } from '../no-data/no-data.module';
import { ComponentLoaderModule } from '../component-loader/component-loader.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [EventImagesComponent],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    BtnOneModule,
    ModalModule,
    SocailMediaIconsNewsModule,
    NoDataModule,
    ComponentLoaderModule,
    LazyLoadImageModule,
    PaginationModule
  ],
  exports: [EventImagesComponent]
})
export class EventImagesModule { }
