import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAccessoriesComponent } from './card-accessories.component';
import { TranslationModule } from "../../i18n/translation.module";
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    CardAccessoriesComponent
  ],
  exports: [CardAccessoriesComponent],
  imports: [
    CommonModule,
    TranslationModule,
    LazyLoadImageModule
  ]
})
export class CardAccessoriesModule { }
