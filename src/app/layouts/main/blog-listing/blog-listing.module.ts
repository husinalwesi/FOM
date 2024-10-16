import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListingRoutingModule } from './blog-listing-routing.module';
import { BlogListingComponent } from './blog-listing.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';


@NgModule({
  declarations: [
    BlogListingComponent
  ],
  imports: [
    CommonModule,
    BlogListingRoutingModule,
    SvgModule
  ]
})
export class BlogListingModule { }
