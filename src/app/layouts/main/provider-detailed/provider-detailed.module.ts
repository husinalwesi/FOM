import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDetailedRoutingModule } from './provider-detailed-routing.module';
import { ProviderDetailedComponent } from './provider-detailed.component';


@NgModule({
  declarations: [
    ProviderDetailedComponent
  ],
  imports: [
    CommonModule,
    ProviderDetailedRoutingModule
  ]
})
export class ProviderDetailedModule { }
