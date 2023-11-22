import { Component, EventEmitter, Input, Output, QueryList, SimpleChanges, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ResizeService } from 'src/app/services/resize.service';
import { environment } from 'src/environments/environment';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { CONFIGURATION } from 'src/app/const/enum';
import { ImageSourcePipe } from 'src/app/pipes/image-source.pipe';
import { TranslationService } from 'src/app/i18n/translation.service';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

const pinColors: any = {
  'c7b91ac0-5a11-499a-9d81-d2e8bea1be55': '#039',//sidra
  'e1d4bcc3-4de9-4609-b22a-05dc2665f695': '#111111',//Petrol Station
  '43f9f93e-b2fa-42f4-8beb-8901ae9b167f': '#139d57'//electric Station
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MapComponent {
  map: any;
  @Input() lang: string = 'en';
  @Output() cancelEmitter: EventEmitter<any> = new EventEmitter();
  @Input() filter: any = [];
  @Input() searchResult: any = [];
  @Input() mapData: any;
  isDataReady: boolean = true;
  // @ViewChild('marker', { static: false }) marker: any;
  @ViewChildren('mapMarker')
  markers!: QueryList<MapComponent>;
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;

  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  @Input() selectedStation: any;
  @Input() stationType: string = '';


  selectedStationByMap: any = null;

  setting: any = {
    isEnabled: false,
    mapOptions: {
      center: { lat: CONFIGURATION.MAP.lat, lng: CONFIGURATION.MAP.lng },
      zoom: 8,
    },
    markerPositions: [],
    markerOptions: {
      draggable: false
    }
  };

  customOptions: OwlOptions = {
    // smartSpeed: 1200,
    // loop: false,
    // mouseDrag: true,
    // touchDrag: true,
    // freeDrag: true,
    rtl: this.TranslationService.isRTL(),
    // dots: true,
    // margin: 0,
    // dotsData: true,
    nav: false,
    items: 2,
    //     dots: true,

    // responsive: {
    //   0: {
    //     items: 2,
    //     dots: true,
    //     nav: true,
    //   },
    //   768: {
    //     items: 2,
    //     dots: true,
    //     nav: true,
    //   },
    // },
    // navText: ['', '']
  };

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  constructor(
    private resizeService: ResizeService,
    private LoadAssetsService: LoadAssetsService,
    private imageSourcePipe: ImageSourcePipe,
    private TranslationService: TranslationService,
  ) { }

  ngOnInit(): void {
    this.loadGoogleMapsApi().then(() => {
      this.ignoreGoogleFont();
      this.setting.isEnabled = true;
    })
      .catch((error) => {
        // console.error('Error loading Google Maps API:', error);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.mapData) {
      if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        this.updateData();
      }
    } else {
      if (!changes?.selectedStation?.firstChange && this.selectedStation?.data) {
        this.markers.forEach((marker, index) => {
          if (index === this.selectedStation.index) this.openInfoWindow(marker, this.selectedStation.data);
        })
      }
    }
  }

  cleanLatLng(str: any) {
    return +str;
  }

  ignoreGoogleFont() {
    if (typeof window !== 'undefined') {
      // https://gist.github.com/boffey/8516b0091649161cb09e244d63076256
      const head: HTMLHeadElement | any = document.getElementsByTagName('head')[0];
      const insertBefore: typeof head.insertBefore = head.insertBefore;

      const ignoredURLs = [
        'https://fonts.googleapis.com/css?family=Roboto',
        'https://fonts.googleapis.com/css?family=Google+Sans+Text'
      ];

      head.insertBefore = function (newElement: HTMLLinkElement, referenceElement: Node) {
        if (newElement.href && ignoredURLs.some(url => newElement.href.indexOf(url) === 0)) return;
        insertBefore.call(head, newElement, referenceElement);
      };
    }
  }

  updateData() {
    const defaultMarkerImage = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    this.isDataReady = false;

    if (this.mapData.length > 0) {
      this.setting.mapOptions.center = { lat: this.cleanLatLng(this.mapData[0].latitued), lng: this.cleanLatLng(this.mapData[0].longitude) };
      this.setting.markerPositions = this.mapData.map((item: any) => {
        return {
          position: {
            lat: this.cleanLatLng(item.latitued),
            lng: this.cleanLatLng(item.longitude),
          },
          // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          icon: item.mapMarker ? { size: new google.maps.Size(20, 32), url: this.imageSourcePipe.transform(item.mapMarker) } : defaultMarkerImage,
          // icon: this.getPinIcon(pinColors[this.stationType] || ''),
          data: item
        };
      });


      this.isDataReady = true;
      setTimeout(() => {
        this.infoWindow.close();
      });

      const bonds: any = new google.maps.LatLngBounds();
      bonds.extend(new google.maps.LatLng(this.setting.mapOptions.center.lat, this.setting.mapOptions.center.lng));
      if (this.map) this.map.fitBounds(bonds);
      if (this.map) this.map.setZoom(10);

    } else {
      this.isDataReady = true;
      this.setting.mapOptions.center = { lat: CONFIGURATION.MAP.lat, lng: CONFIGURATION.MAP.lng };
      this.setting.markerPositions = [];
    }
  }

  openInfoWindow(marker: any, data: any) {
    this.infoWindow.close();
    this.infoWindow.options = { maxWidth: 372 };
    this.selectedStationByMap = data;
    this.infoWindow.open(marker);
    // this.infoWindow.close();

    // setTimeout(() => {
    //   this.selectedStationByMap = data;
    //   this.infoWindow.open(marker);
    //   setTimeout(() => {
    //     this.setPopUpWidth();
    //   }, 750);
    // }, 100);
  }

  setPopUpWidth(screenWidth: number = 0) {
    if (typeof window !== 'undefined') {
      let popUp: any = document.querySelector(".gm-style-iw-c");
      let popUpTriangle: any = document.querySelector(".gm-style-iw-tc");
      if (!popUp || !popUpTriangle) return;
      if (!screenWidth) screenWidth = this.resizeService.getWindowWidth();
      let width = screenWidth > 400 ? 375 : (screenWidth - 16);
      // 
      popUp.style.maxWidth = `${width}px`;
      popUp.style.opacity = 1;
      popUpTriangle.style.opacity = 1;
    }
  }

  getPinIcon(color: string) {
    return {
      path: 'M 10 0 C 6.007812 0 2.757812 3.25 2.757812 7.242188 C 2.757812 12.199219 9.238281 19.476562 9.515625 19.785156 C 9.773438 20.074219 10.226562 20.070312 10.484375 19.785156 C 10.761719 19.476562 17.242188 12.199219 17.242188 7.242188 C 17.242188 3.25 13.992188 0 10 0 Z M 10 10.886719 C 7.992188 10.886719 6.355469 9.253906 6.355469 7.242188 C 6.355469 5.234375 7.992188 3.597656 10 3.597656 C 12.007812 3.597656 13.644531 5.234375 13.644531 7.242188 C 13.644531 9.253906 12.007812 10.886719 10 10.886719 Z M 10 10.886719',
      fillColor: color,
      fillOpacity: 1.0,
      strokeColor: color,
      strokeWeight: 1,
      scale: 1.7
    };
  }

  loadGoogleMapsApi(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        resolve();
        return;
      }
      let lang = typeof window !== 'undefined' ? localStorage.getItem('LANGUAGE') : 'en';
      const filePath = `https://maps.googleapis.com/maps/api/js?language=${lang || 'en'}&callback=initMap&key=${environment.googleMapKey}`;

      this.LoadAssetsService.loadJSP(filePath, 'google-maps', () => {
        resolve();
      }, false, '', true);
    });
  }

  cancel() {
    this.cancelEmitter.emit(true);
  }

  mapReady(map: any) {
    this.map = map;
  }

}
