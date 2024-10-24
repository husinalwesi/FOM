import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './social-icons.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    SocialIconsComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [SocialIconsComponent]
})
export class SocialIconsModule { }
