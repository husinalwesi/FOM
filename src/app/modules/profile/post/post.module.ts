import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { SvgModule } from '../../svg/svg.module';
import { PostActionModule } from "../../post-action/post-action.module";

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    PostActionModule
],
  exports: [PostComponent]
})
export class PostModule { }
