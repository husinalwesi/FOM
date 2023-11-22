import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesMultimediaComponent } from './fahes-multimedia.component';
import { FahesMultimediaRoutingModule } from './fahes-multimedia-routing.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { TranslateModule } from '@ngx-translate/core';
import { DdlStyleSecondModule } from 'src/app/modules/ddl-style-second/ddl-style-second.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';
import { ComponentLoaderModule } from 'src/app/modules/component-loader/component-loader.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SocailMediaIconsNewsModule } from 'src/app/modules/socail-media-icons-news/socail-media-icons-news.module';
import { GalleriesModalModule } from 'src/app/modules/galleries-modal/galleries-modal.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [FahesMultimediaComponent],
  imports: [
    CommonModule,
    FahesMultimediaRoutingModule,
    SvgModule,
    BtnOneModule,
    TranslateModule,
    DdlStyleSecondModule,
    TranslationModule,
    FormsModule,
    NoDataModule,
    ComponentLoaderModule,
    ModalModule,
    SocailMediaIconsNewsModule,
    GalleriesModalModule,
    LazyLoadImageModule
  ]
})
export class FahesMultimediaModule { }
