import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LocationListComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    FormsModule
  ],
  exports :[LocationListComponent]
})
export class LocationListModule { }
