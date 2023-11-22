import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetrolStationsComponent } from './petrol-stations.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { MapModule } from '../map/map.module';
import { SearchMapModule } from '../search-map/search-map.module';
import { FormsModule } from '@angular/forms';
import { NoDataModule } from '../no-data/no-data.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderTwoModule } from '../loader-two/loader-two.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PetrolStationsComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule,
    MapModule,
    SearchMapModule,
    FormsModule,
    NoDataModule,
    LazyLoadImageModule,
    LoaderTwoModule,
    RouterModule
  ],
  exports: [PetrolStationsComponent]
})
export class PetrolStationsModule { }
