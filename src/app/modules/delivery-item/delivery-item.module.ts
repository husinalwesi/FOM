import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryItemComponent } from './delivery-item.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    DeliveryItemComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [DeliveryItemComponent]
})
export class DeliveryItemModule { }
