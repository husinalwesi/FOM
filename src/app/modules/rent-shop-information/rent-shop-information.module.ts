import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentShopInformationComponent } from './rent-shop-information.component';
import { SvgModule } from '../svg/svg.module';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    RentShopInformationComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    DdlStanderModule,
    TranslationModule,
    FormsModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [RentShopInformationComponent]
})
export class RentShopInformationModule { }
