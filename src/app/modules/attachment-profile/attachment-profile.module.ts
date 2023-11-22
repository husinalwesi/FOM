import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachmentProfileComponent } from './attachment-profile.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    AttachmentProfileComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [AttachmentProfileComponent]
})
export class AttachmentProfileModule { }
