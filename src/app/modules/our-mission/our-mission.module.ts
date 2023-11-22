import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurMissionComponent } from './our-mission.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { MissionBoxModule } from '../mission-box/mission-box.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    OurMissionComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule,
    MissionBoxModule,
    CarouselModule
  ],
  exports: [OurMissionComponent]
})
export class OurMissionModule { }
