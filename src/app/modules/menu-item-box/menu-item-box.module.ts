import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemBoxComponent } from './menu-item-box.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    MenuItemBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslationModule
  ],
  exports: [MenuItemBoxComponent]
})
export class MenuItemBoxModule { }
