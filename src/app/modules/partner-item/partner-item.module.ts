import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerItemComponent } from './partner-item.component';

@NgModule({
  declarations: [
    PartnerItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PartnerItemComponent]
})
export class PartnerItemModule { }
