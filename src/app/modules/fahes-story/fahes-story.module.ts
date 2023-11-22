import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesStoryComponent } from './fahes-story.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FahesStoryComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule
  ],
  exports: [FahesStoryComponent]
})
export class FahesStoryModule { }
