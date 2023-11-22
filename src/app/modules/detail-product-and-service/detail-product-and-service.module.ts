import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductAndServiceComponent } from './detail-product-and-service.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DetailProductAndServiceComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    LazyLoadImageModule,
    RouterModule
  ],
  exports: [DetailProductAndServiceComponent]
})
export class DetailProductAndServiceModule { }
