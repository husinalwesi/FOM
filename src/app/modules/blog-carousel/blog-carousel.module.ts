import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCarouselComponent } from './blog-carousel.component';
import { BlogItemModule } from '../blog-item/blog-item.module';

@NgModule({
  declarations: [
    BlogCarouselComponent
  ],
  imports: [
    CommonModule,
    BlogItemModule
  ],
  exports: [BlogCarouselComponent]
})
export class BlogCarouselModule { }
