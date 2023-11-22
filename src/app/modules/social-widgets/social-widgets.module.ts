import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialWidgetsComponent } from './social-widgets.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { InstagramEmbedComponent } from 'src/app/components/instagram-embed/instagram-embed.component';
import { TwitterEmbedComponent } from 'src/app/components/twitter-embed/twitter-embed.component';
import { SocialAccountWidgetModule } from '../social-account-widget/social-account-widget.module';

@NgModule({
  declarations: [
    SocialWidgetsComponent,
    TwitterEmbedComponent,
    InstagramEmbedComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    SocialAccountWidgetModule
  ],
  exports: [SocialWidgetsComponent]
})
export class SocialWidgetsModule { }
