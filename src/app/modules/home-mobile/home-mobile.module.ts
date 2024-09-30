import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMobileComponent } from './home-mobile.component';

@NgModule({
  declarations: [
    HomeMobileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeMobileComponent]
})
export class HomeMobileModule { }
