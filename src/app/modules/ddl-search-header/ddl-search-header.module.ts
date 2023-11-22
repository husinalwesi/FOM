import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlSearchHeaderComponent } from './ddl-search-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { SvgModule } from '../svg/svg.module';
import { DirectivesModule } from '../directives/directives.module';


@NgModule({
  declarations: [
    DdlSearchHeaderComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    DirectivesModule
  ],
  exports:[DdlSearchHeaderComponent]
})
export class DdlSearchHeaderModule { }
