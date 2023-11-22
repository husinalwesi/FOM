import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMapComponent } from './search-map.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    SearchMapComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    DirectivesModule
  ],
  exports: [SearchMapComponent]
})
export class SearchMapModule { }
