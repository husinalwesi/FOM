import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemOurStoryComponent } from './menu-item-our-story.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuItemOurStoryComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    LazyLoadImageModule,
    RouterModule
  ],
  exports: [MenuItemOurStoryComponent]
})
export class MenuItemOurStoryModule { }
