import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePartnersComponent } from './home-partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomePartnersComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [HomePartnersComponent]
})
export class HomePartnersModule { }
