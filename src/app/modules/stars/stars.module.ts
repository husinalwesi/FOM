import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    StarsComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [StarsComponent]
})
export class StarsModule { }
