import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsProductAndServiceComponent } from './statistics-product-and-service.component';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    StatisticsProductAndServiceComponent
  ],
  imports: [
    CommonModule,
    TranslationModule
  ],
  exports:[StatisticsProductAndServiceComponent]
})
export class StatisticsProductAndServiceModule { }
