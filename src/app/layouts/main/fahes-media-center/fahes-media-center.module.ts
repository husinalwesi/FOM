import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesMediaCenterComponent } from './fahes-media-center.component';
import { FahesMediaCenterRoutingModule } from './fahes-media-center-routing.module';
import { MilestonesModule } from 'src/app/modules/milestones/milestones.module';
import { TranslateModule } from '@ngx-translate/core';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { LargeViewModule } from 'src/app/modules/large-view/large-view.module';
import { SmallViewModule } from 'src/app/modules/small-view/small-view.module';

@NgModule({
  declarations: [FahesMediaCenterComponent],
  imports: [
    CommonModule,
    FahesMediaCenterRoutingModule,
    MilestonesModule,
    TranslateModule,
    SvgModule,
    LargeViewModule,
    SmallViewModule
  ]
})
export class FahesMediaCenterModule { }
