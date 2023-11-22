import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthicItemComponent } from './ethic-item.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    EthicItemComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [EthicItemComponent]
})
export class EthicItemModule { }
