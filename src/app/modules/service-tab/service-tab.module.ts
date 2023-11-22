import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceTabComponent } from './service-tab.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ServiceTabComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    RouterLink
  ],
  exports:[ServiceTabComponent]
})
export class ServiceTabModule { }
