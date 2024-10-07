import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
// import { SvgModule } from 'src/app/modules/svg/svg.module';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeHeroModule } from 'src/app/modules/home-hero/home-hero.module';
import { HomeMobileModule } from 'src/app/modules/home-mobile/home-mobile.module';
import { HomeBlogsModule } from 'src/app/modules/home-blogs/home-blogs.module';
import { HomePartnersModule } from 'src/app/modules/home-partners/home-partners.module';
import { SnowflakeModule } from 'src/app/modules/snowflake/snowflake.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    TranslationModule,
    // SvgModule,
    // CarouselModule,

    HomeHeroModule,
    HomeMobileModule,
    HomeBlogsModule,
    HomePartnersModule,
    SnowflakeModule
  ],
})
export class HomePageModule { }
