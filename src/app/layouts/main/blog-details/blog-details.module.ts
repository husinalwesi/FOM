import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { TagsModule } from "../../../modules/tags/tags.module";


@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    SvgModule,
    TagsModule
]
})
export class BlogDetailsModule { }
