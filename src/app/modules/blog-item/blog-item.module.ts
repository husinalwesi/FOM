import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './blog-item.component';



@NgModule({
  declarations: [
    BlogItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BlogItemComponent]
})
export class BlogItemModule { }
