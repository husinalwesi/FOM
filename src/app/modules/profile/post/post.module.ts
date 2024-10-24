import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { SvgModule } from '../../svg/svg.module';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [PostComponent]
})
export class PostModule { }
