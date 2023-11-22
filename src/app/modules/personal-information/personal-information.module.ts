import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './personal-information.component';
import { SvgModule } from '../svg/svg.module';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule } from '../date-time-picker/date-time-picker.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    DdlStanderModule,
    TranslationModule,
    FormsModule,
    DateTimePickerModule,
    DirectivesModule
  ],
  exports: [PersonalInformationComponent]
})
export class PersonalInformationModule { }
