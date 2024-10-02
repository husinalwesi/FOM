import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlogsComponent } from './home-blogs.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeBlogsComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule
  ],
  exports: [HomeBlogsComponent]
})
export class HomeBlogsModule { }
