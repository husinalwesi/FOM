import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTwoComponent } from './card-two.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardTwoComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    TranslationModule,
    LazyLoadImageModule,
    RouterModule
  ],
  exports: [CardTwoComponent]
})
export class CardTwoModule { }
