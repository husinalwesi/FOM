import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchButtonComponent } from './switch-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SwitchButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SwitchButtonComponent]
})
export class SwitchButtonModule { }
