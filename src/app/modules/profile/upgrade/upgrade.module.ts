import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeComponent } from './upgrade.component';
import { SvgModule } from '../../svg/svg.module';

@NgModule({
  declarations: [
    UpgradeComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [UpgradeComponent]
})
export class UpgradeModule { }
