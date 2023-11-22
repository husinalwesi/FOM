import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeViewComponent } from './large-view.component';
import { SvgModule } from '../svg/svg.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    LargeViewComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    RouterModule,
    TranslationModule
  ],
  exports: [LargeViewComponent]
})
export class LargeViewModule { }
