import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsSideComponent } from './blogs-side.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    BlogsSideComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [BlogsSideComponent]
})
export class BlogsSideModule { }
