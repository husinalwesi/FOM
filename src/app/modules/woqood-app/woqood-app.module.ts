import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoqoodAppComponent } from './woqood-app.component';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    WoqoodAppComponent
  ],
  imports: [
    CommonModule,
    TranslationModule
  ],
  exports: [WoqoodAppComponent]
})
export class WoqoodAppModule { }
