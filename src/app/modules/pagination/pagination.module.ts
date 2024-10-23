import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [PaginationComponent]
})
export class PaginationModule { }
