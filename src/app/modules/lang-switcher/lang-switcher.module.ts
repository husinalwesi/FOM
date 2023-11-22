import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangSwitcherComponent } from './lang-switcher.component';

@NgModule({
  declarations: [
    LangSwitcherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LangSwitcherComponent]
})
export class LangSwitcherModule { }
