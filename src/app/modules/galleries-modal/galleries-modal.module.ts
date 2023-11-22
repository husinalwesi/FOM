import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriesModalComponent } from './galleries-modal.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    GalleriesModalComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [GalleriesModalComponent]
})
export class GalleriesModalModule { }
