import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { SvgModule } from '../../svg/svg.module';

@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [PersonalComponent]
})
export class PersonalModule { }
