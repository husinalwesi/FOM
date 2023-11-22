import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoqodFeedbackRoutingModule } from './woqod-feedback-routing.module';
import { WoqodFeedbackComponent } from './woqod-feedback.component';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { AttachmentSecondStyleModule } from 'src/app/modules/attachment-second-style/attachment-second-style.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { DdlStyleTwoModule } from 'src/app/modules/ddl-style-two/ddl-style-two.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { DirectivesModule } from 'src/app/modules/directives/directives.module';
import { RecaptchModule } from 'src/app/modules/recaptch/recaptch.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';


@NgModule({
  declarations: [
    WoqodFeedbackComponent,
  ],
  imports: [
    CommonModule,
    WoqodFeedbackRoutingModule,
    BtnOneModule,
    FormsModule,
    TranslationModule,
    SvgModule,
    AttachmentSecondStyleModule,
    DdlStyleTwoModule,
    DirectivesModule,
    RecaptchModule,
    ModalModule
  ]
})
export class WoqodFeedbackModule { }
