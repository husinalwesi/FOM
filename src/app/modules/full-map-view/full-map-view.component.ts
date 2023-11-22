import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID, QueryList, SimpleChanges, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { fromEvent } from 'rxjs';
import { CONFIGURATION } from 'src/app/const/enum';
import { PlaceholderImgService } from 'src/app/services/placeholder-img.service';
import { ResizeService } from 'src/app/services/resize.service';
import { environment } from 'src/environments/environment';
import { MapComponent } from '../map/map.component';
import { ImageSourcePipe } from 'src/app/pipes/image-source.pipe';
import { TranslationService } from 'src/app/i18n/translation.service';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslateService } from '@ngx-translate/core';

const pinColors = {
  red: '#b30938'
};


@Component({
  selector: 'app-full-map-view',
  templateUrl: './full-map-view.component.html',
  styleUrls: ['./full-map-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FullMapViewComponent {
  map: any;
  @Output() topLocationsEmitter: EventEmitter<any> = new EventEmitter();

  // @Input() locationsTop: any = [];
  // isDataReady: boolean = false;
  @Input() stationName: string = '';
  @Output() stationChangeEmitter: EventEmitter<any> = new EventEmitter();
  // @Output() statusChangeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() servicesChangeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() allDayEmitter: EventEmitter<any> = new EventEmitter();
  @Output() limitedHoursChangeEmitter: EventEmitter<any> = new EventEmitter();
  // @Output() locationChangeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() submitEmitter: EventEmitter<any> = new EventEmitter();
  @Output() resetEmitter: EventEmitter<any> = new EventEmitter();
  @Output() cancelEmitter: EventEmitter<any> = new EventEmitter();
  @Output() selectStationEmitter: EventEmitter<any> = new EventEmitter();
  @Output() workingHoursEmitter: EventEmitter<any> = new EventEmitter();

  @Input() workingHours: any = [];
  @Input() lang: string = 'en';
  @Input() isSubmitted: boolean = false;
  @Input() searchResult: any = [];
  @Input() filter: any = [];
  @Input() locationsTop: any = [];
  @Input() allDay: any;
  @Input() limitedHours: any;
  @Input() stationDDL: any;
  // @Input() statusDDL: any;
  // @Input() addresses: any;
  @Input() servicesDDL: any;
  @Input() selectedStation: any;

  selectedStationByMap: any = null;

  @Input() mapData: any = [];

  @ViewChildren('mapMarker')
  markers!: QueryList<MapComponent>;

  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;

  setting: any = {
    isEnabled: false,
    mapOptions: {
      center: { lat: 31.83171332720161, lng: 35.926773942700194 },
      zoom: 14,
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
    private placeholderImgService: PlaceholderImgService,
    private resizeService: ResizeService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private imageSourcePipe: ImageSourcePipe,
    private TranslationService: TranslationService,
    private loadAssetsService: LoadAssetsService,
    private translate: TranslateService,
  ) {
    this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.mapData) {
      this.updateData();
    }
    if (!changes?.selectedStation?.firstChange && this.selectedStation?.data) {
      this.markers.forEach((marker, index) => {
        if (index === this.selectedStation.index) this.openInfoWindow(marker, this.selectedStation.data);
      })
    }
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

  cleanLatLng(str: any) {
    // console.log(str);

    // console.log(str);
    return parseFloat(str.replace(/[^\d.-]/g, ''));
    // return str ? parseFloat(str.replace(/[^\d.-]/g, '')) : 0;
  }

  ngAfterViewInit(): void {
    // this.setting.mapOptions.center = { lat: this.cleanLatLng(this.mapData[0].lat), lng: this.cleanLatLng(this.mapData[0].long) };
    // this.setting.markerPositions = this.mapData.map((item: any) => {
    //   return {
    //     position: {
    //       lat: this.cleanLatLng(item.lat),
    //       lng: this.cleanLatLng(item.long),
    //     },
    //     icon: this.getPinIcon(pinColors.red),
    //     data: item
    //   };
    // });



    if (typeof window !== 'undefined') {
      this.loadGoogleMapsApi()
        .then(() => {
          this.ignoreGoogleFont();
          this.setting.isEnabled = true;
        })
        .catch((error) => {
          // console.error('Error loading Google Maps API:', error);
        });
    }
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig(data));
    // this.resizeService.screenWidthChange$.subscribe(data => {
    //   if (data.isChanged) this.setPopUpWidth(data.width);
    // });
  }

  updateData() {
    const defaultMarkerImage = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    // this.isDataReady = false;
    if (this.mapData.length > 0) {
      this.setting.mapOptions.center = { lat: this.cleanLatLng(this.mapData[0].latitued), lng: this.cleanLatLng(this.mapData[0].longitude) };
      this.setting.markerPositions = this.mapData.map((item: any) => {
        return {
          position: {
            lat: this.cleanLatLng(item.latitued),
            lng: this.cleanLatLng(item.longitude),
          },
          // icon: this.getPinIcon(pinColors.red),
          icon: item.mapMarker ? { size: new google.maps.Size(20, 32), url: this.imageSourcePipe.transform(item.mapMarker) } : defaultMarkerImage,
          data: item
        };
      });

      const bonds: any = new google.maps.LatLngBounds();
      bonds.extend(new google.maps.LatLng(this.setting.mapOptions.center.lat, this.setting.mapOptions.center.lng));
      if (this.map) this.map.fitBounds(bonds);
      if (this.map) this.map.setZoom(10);

    } else {
      this.setting.mapOptions.center = { lat: CONFIGURATION.MAP.lat, lng: CONFIGURATION.MAP.lng };
      this.setting.markerPositions = [];
    }
    // setTimeout(() => {
    //   // this.isDataReady = true;
    // });
  }

  openInfoWindow(marker: any, data: any) {
    this.infoWindow.close();
    this.infoWindow.options = { maxWidth: 375 };
    this.selectedStationByMap = data;
    this.infoWindow.open(marker);
  }

  getPinIcon(color: string) {
    return {
      path: 'M8,0A8,8,0,1,0,8,16A8,8,0,1,0,8,0Z',
      fillColor: color,
      fillOpacity: 1.0,
      strokeColor: 'white',
      strokeWeight: 2,
      scale: 0.7
    };
  }

  loadGoogleMapsApi(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        resolve();
        return;
      }
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        if (isPlatformBrowser(this.platformId))
          script.src = `https://maps.googleapis.com/maps/api/js?language=${localStorage.getItem('LANGUAGE') || 'en'}&callback=initMap&key=${environment.googleMapKey}`;

        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        const scriptLoad$ = fromEvent(window, 'load');
        scriptLoad$.subscribe(
          () => {
            if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {

              resolve();
            } else {
              reject(new Error('Failed to load Google Maps API.'));
            }
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  }


  stationChange(option: any) {
    this.stationChangeEmitter.emit(option);
  }

  // statusChange(option: any) {
  //   this.statusChangeEmitter.emit(option);
  // }

  servicesChange(option: any) {
    this.servicesChangeEmitter.emit(option);
  }

  changeAllDay(option: any) {
    this.allDayEmitter.emit(option);
  }

  changeLimitedHours(option: any) {
    this.limitedHoursChangeEmitter.emit(option);
  }

  // locationChange(selection: any) {
  //   this.locationChangeEmitter.emit(selection);
  // }

  onSubmit(form: any) {
    this.submitEmitter.emit(form);
  }

  resetAll(event: any) {
    this.resetEmitter.emit(true);
  }

  cancel() {
    this.cancelEmitter.emit(true);
  }

  selectStation(id: string) {
    this.selectStationEmitter.emit(id);
  }

  workingHoursChange(event: any) {
    this.workingHoursEmitter.emit(event);
  }

  mapReady(map: any) {
    this.map = map;
  }


  updateCarouselConfig(data: any) {
    if (!data.isChanged) return;
    // 
    let owlCarouselService = this.owlCarousel as any;
    let carouselService = owlCarouselService?.carouselService as CarouselService;
    if (carouselService) carouselService.onResize(data.width);
  }

  topLocationsEmitHandler(event: any) {
    this.topLocationsEmitter.emit(event);
  }

}
