import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMemberItemComponent } from './team-member-item.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { ModalModule } from '../modal/modal.module';
import { SvgModule } from '../svg/svg.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    TeamMemberItemComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    ModalModule,
    SvgModule,
    LazyLoadImageModule
  ],
  exports: [TeamMemberItemComponent]
})
export class TeamMemberItemModule { }
