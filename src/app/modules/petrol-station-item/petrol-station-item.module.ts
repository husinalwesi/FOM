import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetrolStationItemComponent } from './petrol-station-item.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { ModalModule } from '../modal/modal.module';
import { GalleriesModalModule } from '../galleries-modal/galleries-modal.module';
import { SocailMediaIconsNewsModule } from '../socail-media-icons-news/socail-media-icons-news.module';

@NgModule({
  declarations: [
    PetrolStationItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    ModalModule,
    GalleriesModalModule,
    SocailMediaIconsNewsModule
  ],
  exports: [PetrolStationItemComponent]
})
export class PetrolStationItemModule { }
