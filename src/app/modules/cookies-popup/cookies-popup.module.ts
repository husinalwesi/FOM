import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesPopupComponent } from './cookies-popup.component';



@NgModule({
  declarations: [
    CookiesPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CookiesPopupComponent]
})
export class CookiesPopupModule { }
