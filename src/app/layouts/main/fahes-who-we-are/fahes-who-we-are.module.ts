import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesWhoWeAreRoutingModule } from './fahes-who-we-are-routing.module';
import { FahesWhoWeAreComponent } from './fahes-who-we-are.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { ContentPageModule } from 'src/app/modules/content-page/content-page.module';


@NgModule({
  declarations: [
    FahesWhoWeAreComponent
  ],
  imports: [
    CommonModule,
    FahesWhoWeAreRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    ContentPageModule
  ]
})
export class FahesWhoWeAreModule { }
