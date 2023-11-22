import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerFilterComponent } from './career-filter.component';
import { SvgModule } from '../svg/svg.module';
import { RangeModule } from '../range/range.module';
import { SwitchButtonModule } from '../switch-button/switch-button.module';
import { FormsModule } from '@angular/forms';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { CareerTagsModule } from '../career-tags/career-tags.module';
import { DdlStyleTwoModule } from '../ddl-style-two/ddl-style-two.module';

@NgModule({
  declarations: [CareerFilterComponent],
  imports: [
    CommonModule,
    SvgModule,
    RangeModule,
    SwitchButtonModule,
    FormsModule,
    BtnOneModule,
    TranslationModule,
    CareerTagsModule,
    DdlStyleTwoModule
  ],
  exports: [CareerFilterComponent]
})
export class CareerFilterModule { }
