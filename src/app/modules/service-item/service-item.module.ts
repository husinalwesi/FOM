import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './service-item.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    ServiceItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    BtnOneModule,
    LazyLoadImageModule
  ],
  exports: [ServiceItemComponent]
})
export class ServiceItemModule { }
