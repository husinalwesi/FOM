import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnWImageComponent } from './btn-w-image.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    BtnWImageComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    TranslationModule
  ],
  exports: [BtnWImageComponent]
})
export class BtnWImageModule { }
