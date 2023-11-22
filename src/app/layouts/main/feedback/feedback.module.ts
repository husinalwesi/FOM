import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { AttachmentSecondStyleModule } from 'src/app/modules/attachment-second-style/attachment-second-style.module';
import { DdlStyleTwoModule } from 'src/app/modules/ddl-style-two/ddl-style-two.module';
import { DirectivesModule } from 'src/app/modules/directives/directives.module';
import { RecaptchModule } from 'src/app/modules/recaptch/recaptch.module';


@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    BtnOneModule,
    FormsModule,
    TranslationModule,
    SvgModule,
    AttachmentSecondStyleModule,
    DdlStyleTwoModule,
    DirectivesModule,
    RecaptchModule
  ]
})
export class FeedbackModule { }
