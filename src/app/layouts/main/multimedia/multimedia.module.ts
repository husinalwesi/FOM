import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimediaComponent } from './multimedia.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BreadcrumbSectionFirstStyleModule } from 'src/app/modules/breadcrumb-section-first-style/breadcrumb-section-first-style.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { HeroBgHalfModule } from 'src/app/modules/hero-bg-half/hero-bg-half.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { MultimediaRoutingModule } from './multimedia-routing.module';
import { BoxsIconNewsModule } from 'src/app/modules/boxs-icon-news/boxs-icon-news.module';
import { FilterWTabsMultimediaComponent } from 'src/app/components/filter-w-tabs-multimedia/filter-w-tabs-multimedia.component';
import { EventImagesModule } from 'src/app/modules/event-images/event-images.module';
import { GalleriesMultimediaModule } from 'src/app/modules/galleries-multimedia/galleries-multimedia.module';
import { VideosMultimediaModule } from 'src/app/modules/videos-multimedia/videos-multimedia.module';
import { FormsModule } from '@angular/forms';
import { VideosModule } from './components/videos/videos.module';
import { ImagesModule } from './components/images/images.module';
import { GalleriesModule } from './components/galleries/galleries.module';
import { ComponentLoaderModule } from 'src/app/modules/component-loader/component-loader.module';

@NgModule({
  declarations: [
    MultimediaComponent,
    FilterWTabsMultimediaComponent
  ],
  imports: [
    CommonModule,
    MultimediaRoutingModule,
    TranslationModule,
    SvgModule,
    BreadcrumbSectionFirstStyleModule,
    PaginationModule,
    BtnOneModule,
    HeroBgHalfModule,
    BoxsIconNewsModule,
    EventImagesModule,
    GalleriesMultimediaModule,
    VideosMultimediaModule,
    FormsModule,
    VideosModule,
    ImagesModule,
    GalleriesModule,
    ComponentLoaderModule
  ]
})
export class MultimediaModule { }
