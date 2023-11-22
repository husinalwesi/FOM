import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsProductAndServiceComponent } from './tabs-product-and-service.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    TabsProductAndServiceComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule
  ],
  exports:[TabsProductAndServiceComponent]
})
export class TabsProductAndServiceModule { }
