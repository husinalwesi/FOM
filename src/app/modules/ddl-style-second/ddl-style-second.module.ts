import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlStyleSecondComponent } from './ddl-style-second.component';
import { TranslateModule } from '@ngx-translate/core';
import { SvgModule } from '../svg/svg.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    DdlStyleSecondComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    DirectivesModule
  ],
  exports: [DdlStyleSecondComponent]
})
export class DdlStyleSecondModule { }
