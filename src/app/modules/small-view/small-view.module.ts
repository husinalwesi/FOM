import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallViewComponent } from './small-view.component';
import { SvgModule } from '../svg/svg.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    SmallViewComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    RouterModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [SmallViewComponent]
})
export class SmallViewModule { }
