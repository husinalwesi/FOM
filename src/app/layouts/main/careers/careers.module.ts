import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CareersComponent } from "./careers.component";
import { CareersRoutingModule } from "./careers-routing.module";
import { BreadcrumbSectionSecondStyleModule } from "src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module";
import { OurJobsModule } from "src/app/modules/our-jobs/our-jobs.module";
import { BtnOneModule } from "src/app/modules/btn-one/btn-one.module";
import { PaginationModule } from "src/app/modules/pagination/pagination.module";
import { SvgModule } from "src/app/modules/svg/svg.module";
import { TranslationModule } from "src/app/i18n/translation.module";
import { CareerFilterModule } from "src/app/modules/career-filter/career-filter.module";
import { HeroHalfModule } from "src/app/modules/hero-half/hero-half.module";
import { SocialAccountWidgetModule } from "src/app/modules/social-account-widget/social-account-widget.module";
import { CareerItemModule } from "src/app/modules/career-item/career-item.module";
import { NoDataModule } from "src/app/modules/no-data/no-data.module";
import { ComponentLoaderModule } from "src/app/modules/component-loader/component-loader.module";

@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    OurJobsModule,
    BtnOneModule,
    PaginationModule,
    SvgModule,
    TranslationModule,
    CareerFilterModule,
    HeroHalfModule,
    SocialAccountWidgetModule,
    CareerItemModule,
    NoDataModule,
    ComponentLoaderModule,
  ],
})
export class CareersModule {}
