import { NgModule } from '@angular/core';
import { ClickOutSideDirective } from 'src/app/directives/click-out-side.directive';
import { onlyNumbersDirective } from 'src/app/directives/only-numberes.directive';
import { OnlyTextDirective } from 'src/app/directives/only-text.directive';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';



@NgModule({
  declarations: [onlyNumbersDirective, OnlyTextDirective, ClickOutSideDirective, TooltipDirective],
  imports: [],
  exports: [onlyNumbersDirective, OnlyTextDirective, ClickOutSideDirective, TooltipDirective]
})
export class DirectivesModule { }
