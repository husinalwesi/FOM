import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDetailedRoutingModule } from './provider-detailed-routing.module';
import { ProviderDetailedComponent } from './provider-detailed.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';
import { StarsModule } from 'src/app/modules/stars/stars.module';
import { PostModule } from 'src/app/modules/profile/post/post.module';
import { NoPostModule } from "../../../modules/profile/no-post/no-post.module";
import { AddPostModule } from "../../../modules/profile/add-post/add-post.module";
import { CoverModule } from "../../../modules/profile/cover/cover.module";
import { ReviewCardModule } from "../../../modules/profile/review-card/review-card.module";
import { ProfileImgModule } from "../../../modules/profile/profile-img/profile-img.module";
import { ProfileInfoModule } from "../../../modules/profile/profile-info/profile-info.module";
import { PasswordModule } from "../../../modules/profile/password/password.module";
import { PersonalModule } from "../../../modules/profile/personal/personal.module";
import { NotificationModule } from "../../../modules/profile/notification/notification.module";
import { UpgradeModule } from "../../../modules/profile/upgrade/upgrade.module";
import { ReviewShortModule } from "../../../modules/profile/review-short/review-short.module";
import { InfoListModule } from "../../../modules/profile/info-list/info-list.module";
import { SocialIconsModule } from 'src/app/modules/social-icons/social-icons.module';


@NgModule({
  declarations: [
    ProviderDetailedComponent
  ],
  imports: [
    CommonModule,
    ProviderDetailedRoutingModule,
    SvgModule,
    ModalModule,
    ImageCropperComponent,
    FormsModule,
    StarsModule,
    PostModule,
    NoPostModule,
    AddPostModule,
    CoverModule,
    ReviewCardModule,
    ProfileImgModule,
    ProfileInfoModule,
    PasswordModule,
    PersonalModule,
    NotificationModule,
    UpgradeModule,
    ReviewShortModule,
    InfoListModule,
    SocialIconsModule
  ]
})
export class ProviderDetailedModule { }
