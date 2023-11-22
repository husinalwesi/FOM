import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchWDdlComponent } from './search-w-ddl.component';
import { DdlStyleSecondModule } from '../ddl-style-second/ddl-style-second.module';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchWDdlComponent
  ],
  imports: [
    CommonModule,
    DdlStyleSecondModule,
    SvgModule,
    TranslationModule,
    FormsModule
  ],
  exports: [SearchWDdlComponent]
})
export class SearchWDdlModule { }
