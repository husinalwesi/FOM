import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsWoaodTagComponent } from './tabs-woaod-tag.component';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [TabsWoaodTagComponent],
  imports: [
    CommonModule,
    TranslationModule
  ],
  exports: [TabsWoaodTagComponent]

})
export class TabsWoaodTagModule { }
