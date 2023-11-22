import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultItemComponent } from './search-result-item.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchResultItemComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule
  ],
  exports: [SearchResultItemComponent]
})
export class SearchResultItemModule { }
