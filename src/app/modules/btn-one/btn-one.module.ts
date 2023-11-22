import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOneComponent } from './btn-one.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    BtnOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslationModule,
    SvgModule
  ],
  exports: [BtnOneComponent]
})
export class BtnOneModule { }
