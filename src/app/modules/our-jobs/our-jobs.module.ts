import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurJobsComponent } from './our-jobs.component';
import { BtnOneModule } from '../btn-one/btn-one.module';



@NgModule({
  declarations: [OurJobsComponent],
  imports: [
    CommonModule,
    BtnOneModule
  ],
  exports: [OurJobsComponent]
})
export class OurJobsModule { }
