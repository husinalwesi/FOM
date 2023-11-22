import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
