import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartPricesComponent } from './chart-prices.component';
// import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    ChartPricesComponent
  ],
  imports: [
    CommonModule,
    // NgApexchartsModule
  ],
  exports: [ChartPricesComponent]
})
export class ChartPricesModule { }
