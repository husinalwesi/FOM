import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelPriceComponent } from './fuel-price.component';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { ChartPricesModule } from '../chart-prices/chart-prices.module';
import { NoDataModule } from '../no-data/no-data.module';

@NgModule({
  declarations: [FuelPriceComponent],
  imports: [
    CommonModule,
    DdlStanderModule,
    TranslationModule,
    ChartPricesModule,
    NoDataModule
  ],
  exports: [FuelPriceComponent]
})
export class FuelPriceModule { }
