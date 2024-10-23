import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListingRoutingModule } from './blog-listing-routing.module';
import { BlogListingComponent } from './blog-listing.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { BlogItemModule } from 'src/app/modules/blog-item/blog-item.module';
import { BlogsSideModule } from 'src/app/modules/blogs-side/blogs-side.module';
import { PageHeadModule } from "../../../modules/page-head/page-head.module";


@NgModule({
  declarations: [
    BlogListingComponent
  ],
  imports: [
    CommonModule,
    BlogListingRoutingModule,
    SvgModule,
    BlogItemModule,
    BlogsSideModule,
    PageHeadModule
]
})
export class BlogListingModule { }
