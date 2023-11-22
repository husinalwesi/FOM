import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookInspectionFahesComponent } from './book-inspection-fahes.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { TimePickerModule } from '../time-picker/time-picker.module';
import { DatePickerSecondStyleModule } from '../date-picker-second-style/date-picker-second-style.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [
    BookInspectionFahesComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule,
    TimePickerModule,
    DatePickerSecondStyleModule,
    CheckboxModule,
    ModalModule
  ],
  exports : [BookInspectionFahesComponent]
})
export class BookInspectionFahesModule { }
