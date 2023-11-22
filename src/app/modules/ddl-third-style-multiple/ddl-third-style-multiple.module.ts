import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlThirdStyleMultipleComponent } from './ddl-third-style-multiple.component';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from '../directives/directives.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    DdlThirdStyleMultipleComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    DirectivesModule
  ],
  exports: [DdlThirdStyleMultipleComponent]
})
export class DdlThirdStyleMultipleModule { }
