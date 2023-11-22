import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosMultimediaComponent } from './videos-multimedia.component';
import { SvgModule } from '../svg/svg.module';
import { SocailMediaIconsNewsModule } from '../socail-media-icons-news/socail-media-icons-news.module';
import { ModalModule } from '../modal/modal.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { NoDataModule } from '../no-data/no-data.module';
import { ComponentLoaderModule } from '../component-loader/component-loader.module';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [VideosMultimediaComponent, VideoItemComponent],
  imports: [
    CommonModule,
    SvgModule,
    SocailMediaIconsNewsModule,
    ModalModule,
    TranslationModule,
    NoDataModule,
    ComponentLoaderModule,
    BtnOneModule,
    PaginationModule
  ],
  exports: [VideosMultimediaComponent]
})
export class VideosMultimediaModule { }
