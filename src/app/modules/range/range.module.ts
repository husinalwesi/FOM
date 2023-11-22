import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from './range.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from 'ngx-slider-v2';

@NgModule({
  declarations: [
    RangeComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule,
    NgxSliderModule
  ],
  exports: [RangeComponent]
})
export class RangeModule { }
