import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsSideComponent } from './blogs-side.component';
import { SvgModule } from '../svg/svg.module';
import { TagsModule } from "../tags/tags.module";

@NgModule({
  declarations: [
    BlogsSideComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TagsModule
],
  exports: [BlogsSideComponent]
})
export class BlogsSideModule { }
