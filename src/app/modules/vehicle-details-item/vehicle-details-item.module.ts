import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailsItemComponent } from './vehicle-details-item.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { CounterModule } from '../counter/counter.module';

@NgModule({
  declarations: [VehicleDetailsItemComponent],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    CounterModule
  ],
  exports:[VehicleDetailsItemComponent]
})
export class VehicleDetailsItemModule { }
