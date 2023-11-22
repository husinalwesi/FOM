import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtoLubricantsGalleriesComponent } from './oto-lubricants-galleries.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    OtoLubricantsGalleriesComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    BtnOneModule,
    LazyLoadImageModule
  ],
  exports: [OtoLubricantsGalleriesComponent]
})
export class OtoLubricantsGalleriesModule { }
