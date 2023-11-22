import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlStanderComponent } from './ddl-stander.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [DdlStanderComponent],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    DirectivesModule
  ],
  exports:[DdlStanderComponent]
})
export class DdlStanderModule { }
