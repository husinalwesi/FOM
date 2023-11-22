import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionItemComponent } from './inspection-item.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    InspectionItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [InspectionItemComponent]
})
export class InspectionItemModule { }
