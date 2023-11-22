import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveCardRoutingModule } from './save-card-routing.module';
import { SaveCardComponent } from './save-card.component';
import { CyberSourceFormModule } from 'src/app/modules/cyber-source-form/cyber-source-form.module';


@NgModule({
  declarations: [
    SaveCardComponent
  ],
  imports: [
    CommonModule,
    SaveCardRoutingModule,
    CyberSourceFormModule
  ]
})
export class SaveCardModule { }
