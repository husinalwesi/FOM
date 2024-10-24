import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info.component';
import { SvgModule } from '../../svg/svg.module';

@NgModule({
  declarations: [
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [ProfileInfoComponent]
})
export class ProfileInfoModule { }
