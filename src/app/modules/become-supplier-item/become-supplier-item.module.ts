import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeSupplierItemComponent } from './become-supplier-item.component';
import { SvgModule } from '../svg/svg.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    BecomeSupplierItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslateModule,
    RouterModule,
    BtnOneModule,
    TranslationModule
  ],
  exports: [BecomeSupplierItemComponent]
})
export class BecomeSupplierItemModule { }
