import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlogsComponent } from './home-blogs.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';
import { BlogItemModule } from '../blog-item/blog-item.module';
import { BlogCarouselModule } from "../blog-carousel/blog-carousel.module";

@NgModule({
  declarations: [
    HomeBlogsComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule,
    BlogItemModule,
    BlogCarouselModule
],
  exports: [HomeBlogsComponent]
})
export class HomeBlogsModule { }
