import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlStyleTwoComponent } from './ddl-style-two.component';
import { TranslateModule } from '@ngx-translate/core';
import { SvgModule } from '../svg/svg.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    DdlStyleTwoComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    DirectivesModule
  ],
  exports: [DdlStyleTwoComponent]
})
export class DdlStyleTwoModule { }
