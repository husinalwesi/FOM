import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterFaqComponent } from './filter-faq.component';
import { TranslateModule } from '@ngx-translate/core';
import { TagsModule } from '../tags/tags.module';
import { DdlStyleTwoModule } from '../ddl-style-two/ddl-style-two.module';

@NgModule({
  declarations: [
    FilterFaqComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    TagsModule,
    DdlStyleTwoModule
  ],
  exports: [FilterFaqComponent]
})
export class FilterFaqModule { }
