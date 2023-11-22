import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriesPagesComponent } from './galleries-pages.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GalleriesPagesComponent
  ],
  exports: [
    GalleriesPagesComponent,

  ],
  imports: [
    CommonModule,
    TranslationModule,
    DirectivesModule,
    RouterModule
  ]
})
export class GalleriesPagesModule { }
