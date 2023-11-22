import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthicItemSecondStyleComponent } from './ethic-item-second-style.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    EthicItemSecondStyleComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [EthicItemSecondStyleComponent]
})
export class EthicItemSecondStyleModule { }
