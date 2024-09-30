import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlogsComponent } from './home-blogs.component';

@NgModule({
  declarations: [
    HomeBlogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeBlogsComponent]
})
export class HomeBlogsModule { }
