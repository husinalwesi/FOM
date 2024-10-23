import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDetailedRoutingModule } from './provider-detailed-routing.module';
import { ProviderDetailedComponent } from './provider-detailed.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';
import { StarsModule } from 'src/app/modules/stars/stars.module';


@NgModule({
  declarations: [
    ProviderDetailedComponent
  ],
  imports: [
    CommonModule,
    ProviderDetailedRoutingModule,
    SvgModule,
    ModalModule,
    ImageCropperComponent,

    FormsModule,
    StarsModule
  ]
})
export class ProviderDetailedModule { }
