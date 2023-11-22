import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesWhatWeDoRoutingModule } from './fahes-what-we-do-routing.module';
import { FahesWhatWeDoComponent } from './fahes-what-we-do.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { ContentPageModule } from 'src/app/modules/content-page/content-page.module';


@NgModule({
  declarations: [
    FahesWhatWeDoComponent
  ],
  imports: [
    CommonModule,
    FahesWhatWeDoRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    ContentPageModule
  ]
})
export class FahesWhatWeDoModule { }
