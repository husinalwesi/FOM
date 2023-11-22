import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionModalComponent } from './subscription-modal.component';
import { SvgModule } from '../svg/svg.module';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { RecaptchModule } from '../recaptch/recaptch.module';
import { DirectivesModule } from 'src/app/modules/directives/directives.module';
import { DetailedBodyModule } from '../detailed-body/detailed-body.module';

@NgModule({
  declarations: [
    SubscriptionModalComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    FormsModule,
    TranslationModule,
    BtnOneModule,
    RecaptchModule,
    DirectivesModule,
    DetailedBodyModule
  ],
  exports: [SubscriptionModalComponent]
})
export class SubscriptionModalModule { }
