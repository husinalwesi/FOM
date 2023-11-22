import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { TabsModule } from '../components/tabs/tabs.module';
import { PasswordComponent } from '../components/password/password.component';
import { TeamsComponent } from '../components/teams/teams.component';
import { ProfileInnerComponent } from '../components/profile-inner/profile-inner.component';
import { BottomActionsComponent } from '../components/bottom-actions/bottom-actions.component';
import { SwitchButtonModule } from 'src/app/modules/switch-button/switch-button.module';
import { TeamsUserComponent } from '../components/teams-user/teams-user.component';
import { TeamsAddNewComponent } from '../components/teams-add-new/teams-add-new.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { AttachmentProfileModule } from 'src/app/modules/attachment-profile/attachment-profile.module';
import { DatePickerFifthStyleModule } from 'src/app/modules/date-picker-fifth-style/date-picker-fifth-style.module';
import { DdlStanderModule } from 'src/app/modules/ddl-stander/ddl-stander.module';
import { FormsModule } from '@angular/forms';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { WalletModule } from '../wallet/wallet.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { DirectivesModule } from 'src/app/modules/directives/directives.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInnerComponent,
    PasswordComponent,
    TeamsComponent,
    BottomActionsComponent,
    TeamsUserComponent,
    TeamsAddNewComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SvgModule,
    TabsModule,
    SwitchButtonModule,
    TranslationModule,
    AttachmentProfileModule,
    DatePickerFifthStyleModule,
    DdlStanderModule,
    FormsModule,
    LazyLoadImageModule,
    WalletModule,
    ModalModule,
    CheckboxModule,
    DirectivesModule
  ],
  exports: [ProfileComponent],
  providers: [FormatDateToApiFormatPipe, DatePipe]
})
export class ProfileModule { }
