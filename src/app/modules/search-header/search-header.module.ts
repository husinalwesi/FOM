import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from './search-header.component';
import { SvgModule } from '../svg/svg.module';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';
import { DdlSearchHeaderModule } from '../ddl-search-header/ddl-search-header.module';
import { DirectivesModule } from '../directives/directives.module';


@NgModule({
  declarations: [
    SearchHeaderComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    FormsModule,
    TranslationModule,
    RouterModule,
    DdlSearchHeaderModule,
    DirectivesModule
  ],
  exports: [ SearchHeaderComponent ]
})
export class SearchHeaderModule { }
