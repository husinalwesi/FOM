import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-petrol-station-item',
  templateUrl: './petrol-station-item.component.html',
  styleUrls: ['./petrol-station-item.component.scss']
})
export class PetrolStationItemComponent {
  mapKey: string = environment.googleMapKey;
  @Input() locationOfMap: any = '';
  size: any = {
    width: 660,
    height: 516
  };
  isModalEnabled3: boolean = false;
  images: any = [];
  @Input() data: any;
  @Input() lang: string = 'en';
  @Output() toggleSelectionEmiter: EventEmitter<any> = new EventEmitter();
  constructor(
    private multimediaService: MultimediaService,
  ) {
  }

  toggleSelection() {
    this.toggleSelectionEmiter.emit();
  }

  showImages() {
    this.multimediaService.GetKenarPropertiesImages({ KenarPropertyID: this.data.id }).subscribe((response) => {
      this.images = (response || []).map((item: any) => {
        return {
          image: item.imageFileId,
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
        }
      }) || [];
      if (this.images.length > 0) this.isModalEnabled3 = true;
      else alert("there is no images");
    });
  }
  isDateExpired(expirationDate: Date): boolean {
    const currentDate = new Date();
    return currentDate > expirationDate;
  }
}
