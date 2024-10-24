import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostActionComponent } from './post-action.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    PostActionComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [PostActionComponent]
})
export class PostActionModule { }
