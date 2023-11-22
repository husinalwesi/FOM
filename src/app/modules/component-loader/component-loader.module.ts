import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderComponent } from './component-loader.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    ComponentLoaderComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [ComponentLoaderComponent]
})
export class ComponentLoaderModule { }
