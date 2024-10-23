import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListingRoutingModule } from './blog-listing-routing.module';
import { BlogListingComponent } from './blog-listing.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { BlogItemModule } from 'src/app/modules/blog-item/blog-item.module';


@NgModule({
  declarations: [
    BlogListingComponent
  ],
  imports: [
    CommonModule,
    BlogListingRoutingModule,
    SvgModule,
    BlogItemModule
  ]
})
export class BlogListingModule { }
