import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { RetailPricesComponent } from './retail-prices.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { ModalModule } from '../modal/modal.module';
import { FuelPriceModule } from '../fuel-price/fuel-price.module';



@NgModule({
  declarations: [RetailPricesComponent],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    ModalModule,
    FuelPriceModule
    
  ],
  exports: [RetailPricesComponent]
})
export class RetailPricesModule { }
