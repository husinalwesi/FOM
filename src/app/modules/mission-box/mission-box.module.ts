import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionBoxComponent } from './mission-box.component';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    MissionBoxComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
  ],
  exports: [MissionBoxComponent]
})
export class MissionBoxModule { }
