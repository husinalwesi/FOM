import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlThirdStyleComponent } from './ddl-third-style.component';
import { TranslateModule } from '@ngx-translate/core';
import { SvgModule } from '../svg/svg.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    DdlThirdStyleComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    DirectivesModule
  ],
  exports: [DdlThirdStyleComponent]
})
export class DdlThirdStyleModule { }
