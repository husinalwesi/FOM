import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlComponent } from './ddl.component';
import { SvgModule } from '../svg/svg.module';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from '../directives/directives.module';


@NgModule({
  declarations: [
    DdlComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    DirectivesModule
  ],
  exports: [DdlComponent]
})
export class DdlModule { }
