import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticMapComponent } from './static-map.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TranslationModule } from "../../i18n/translation.module";

@NgModule({
  declarations: [
    StaticMapComponent
  ],
  exports: [StaticMapComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    TranslationModule
  ]
})
export class StaticMapModule { }
