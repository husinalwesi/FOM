import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '../modal/modal.module';
import { GalleriesMultimediaComponent } from './galleries-multimedia.component';
import { SocailMediaIconsNewsModule } from '../socail-media-icons-news/socail-media-icons-news.module';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { GalleriesModalModule } from '../galleries-modal/galleries-modal.module';
import { NoDataModule } from '../no-data/no-data.module';
import { ComponentLoaderModule } from '../component-loader/component-loader.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [GalleriesMultimediaComponent],
  imports: [
    CommonModule,
    ModalModule,
    SocailMediaIconsNewsModule,
    ModalModule,
    SvgModule,
    TranslationModule,
    GalleriesModalModule,
    NoDataModule,
    ComponentLoaderModule,
    BtnOneModule,
    LazyLoadImageModule,
    PaginationModule
  ],
  exports: [GalleriesMultimediaComponent]
})
export class GalleriesMultimediaModule { }
