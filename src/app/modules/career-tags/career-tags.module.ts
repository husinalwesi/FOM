import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerTagsComponent } from './career-tags.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { TagsModule } from '../tags/tags.module';

@NgModule({
  declarations: [
    CareerTagsComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    TagsModule
  ],
  exports: [CareerTagsComponent]
})
export class CareerTagsModule { }
