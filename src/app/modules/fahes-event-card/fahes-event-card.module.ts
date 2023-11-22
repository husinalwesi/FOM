import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesEventCardComponent } from './fahes-event-card.component';
import { SvgModule } from '../svg/svg.module';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    FahesEventCardComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    TranslationModule,
    RouterLink,
    LazyLoadImageModule
  ],
  exports: [FahesEventCardComponent]
})
export class FahesEventCardModule { }
