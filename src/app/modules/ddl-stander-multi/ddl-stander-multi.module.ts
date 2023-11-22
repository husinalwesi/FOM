import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlStanderMultiComponent } from './ddl-stander-multi.component';
import { DirectivesModule } from '../directives/directives.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    DdlStanderMultiComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    DirectivesModule
  ],
  exports: [DdlStanderMultiComponent]
})
export class DdlStanderMultiModule { }
