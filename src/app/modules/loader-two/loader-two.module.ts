import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderTwoComponent } from './loader-two.component';

@NgModule({
  declarations: [
    LoaderTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderTwoComponent]
})
export class LoaderTwoModule { }
