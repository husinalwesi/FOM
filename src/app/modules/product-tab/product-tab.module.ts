import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTabComponent } from './product-tab.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductTabComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    RouterModule
  ],
  exports:[ProductTabComponent]
})
export class ProductTabModule { }
