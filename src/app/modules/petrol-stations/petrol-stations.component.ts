import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { CONFIGURATION } from 'src/app/const/enum';
import { ResizeService } from 'src/app/services/resize.service';
import { GUID } from "src/app/const/guid";
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'app-petrol-stations',
  templateUrl: './petrol-stations.component.html',
  styleUrls: ['./petrol-stations.component.scss']
})
export class PetrolStationsComponent {
  image: string = "assets/images/hero-carousel/2.webp";
  filter: any = [];
  workingHours: any = [];
  selectedStation: any = null;
  isLoading: boolean = true;
  lang: string = 'en';
  allData: any = {};
  allDataFiltered: any = {};
  isSubmitted: boolean = false;
  stationName: string = '';

  searchResult: any = [];
  servicesDDLReady: any = {};

  allDay: any = {
    title: '24/7',
    name: 'allDay',
    value: false
  };

  limitedHours: any = {
    title: 'SHOP.LIMITED_HOURS',
    name: 'limitedHours',
    value: false
  };

  // addressesDDL: any = {
  //   selected: null,
  //   placeholder: 'INSPECTION_FILTER.CHOOSE_ANY',
  //   list: []
  // };

  servicesDDL: any = {
    selected: [],
    placeholder: 'INSPECTION_FILTER.CHOOSE_ANY',
    list: []
  };

  // statusDDL: any = {
  //   selected: null,
  //   placeholder: 'INSPECTION_FILTER.CHOOSE_STATUS',
  //   list: []
  // };

  stationDDL: any = {
    selected: null,
    placeholder: 'INSPECTION_FILTER.CHOOSE_STATION',
    list: []
  };
  isClient: boolean = false;
  filterHeight: number = 0;

  @ViewChild('filterMap', { static: false }) filterMap: any;

  constructor(
    private translate: TranslateService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private platformService: PlatformService
  ) {
    this.isClient = this.platformService.isClient();
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }


  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.setHeight());
    // this.setHeight();
  }

  setHeight() {
    // 90 header menu height
    if (typeof window !== 'undefined') {
      this.filterHeight = 0;
      setTimeout(() => {
        this.filterHeight = this.resizeService.isMobile() ? (window.innerHeight - 90) : (this.filterMap?.nativeElement?.offsetHeight || 0);
      });
    }
  }

  getData() {
    this.getStationTypes();
  }

  getStationTypes() {
    this.multimediaService.getStationTypes().subscribe((response) => {
      const allowedTypes = [
        GUID.woqod.map.Sidra,//Sidra
        GUID.woqod.map.Petrol_station,//Petrol Station
        GUID.woqod.map.electric//electric Station
      ];

      const filteredTypes = (response || []).filter((station: any) => allowedTypes.includes(station.stationTypesID)) || [];


      const stationDDLTemp = filteredTypes.map((station: any) => {
        return {
          key: station.stationTypesID || '',
          title: {
            en: station.locationType_En || '',
            ar: station.locationType_Ar || ''
          },
          locationTypeId: station.locationTypeId,
          "locationTypeImageID": station.locationTypeImageID,
          "locationTypeMarkerID": station.locationTypeMarkerID
        }
      });

      // STATIC REORDER..
      const petrolStation = stationDDLTemp.find((item: any) => item.key === GUID.woqod.map.Sidra);
      const mobileStation = stationDDLTemp.find((item: any) => item.key === GUID.woqod.map.electric);
      const marineStation = stationDDLTemp.find((item: any) => item.key === GUID.woqod.map.Petrol_station);

      let temp = [];
      if (petrolStation) temp.push(petrolStation);
      if (marineStation) temp.push(marineStation);
      if (mobileStation) temp.push(mobileStation);
      // 
      this.stationDDL.list = temp;

      // if (this.stationDDL.list?.[0]) this.stationDDL.selected = this.stationDDL.list[0];
      // if (this.stationDDL.list?.[0]) this.stationDDL.selected = this.stationDDL.list[1];
      this.getAllWorkingHoursTypes();
    });
  }

  getAllWorkingHoursTypes() {
    this.multimediaService.GetAllWorkingHoursTypes().subscribe((response) => {
      // 
      this.workingHours = (response || []);
      this.getMapData(true);
    });
  }

  getMapData(isFirstLoad: boolean) {
    if (this.allData[this.stationDDL.selected?.key]) {
      this.servicesDDL.list = this.servicesDDLReady[this.stationDDL.selected?.key];
      if (isFirstLoad) this.isLoading = false;
    } else {
      // if (isFirstLoad) this.isLoading = true;
      // 


      let payload = this.stationDDL.selected?.key ? { locationTypeId: this.stationDDL.selected?.key } : {};

      // console.log(this.stationDDL.list);


      this.multimediaService.getMapDataNew(payload).subscribe((response) => {
        this.allData[this.stationDDL.selected?.key || 'all'] = ((response || []).filter((station: any) => station.latitued && station.latitued !== '0' && station.longitude && station.longitude !== '0') || [] || []).map((item: any) => {
          const stationType = this.stationDDL.list.find((stationItem: any) => +stationItem.locationTypeId === +item.locationTypeID);
          return {
            ...item,
            ...{
              workingHoursTypeData: this.workingHours.find((workingItem: any) => workingItem.detailesId === item.workingHours),
              mapMarker: stationType?.locationTypeMarkerID
            }
          }
        });

        // console.log(this.allData);


        this.allDataFiltered[this.stationDDL.selected?.key ? this.stationDDL.selected?.key : 'all'] = this.allData[this.stationDDL.selected?.key || 'all'];


        this.servicesDDLReady[this.stationDDL.selected?.key] = this.setPetrolStationServices(response);

        this.servicesDDL.list = this.servicesDDLReady[this.stationDDL.selected?.key];

        if (isFirstLoad) this.isLoading = false;
        this.setHeight();
      });
    }
  }

  // setPetrolStationAddress(items: any) {
  //   const itemsWithoutDuplicate = this.getArrayWithoutDuplicateByKey(items, 'address');
  //   return (itemsWithoutDuplicate || []).map((item: any) => {
  //     return {
  //       key: item.address || '',
  //       title: {
  //         en: item.address || '',
  //         ar: item.address || ''
  //       }
  //     }
  //   });
  // }

  // setPetrolStationStatus(items: any) {
  //   const itemsWithoutDuplicate = this.getArrayWithoutDuplicateByKey(items, 'stationStatusEN');
  //   return (itemsWithoutDuplicate || []).map((item: any) => {
  //     return {
  //       key: item.stationStatusEN || '',
  //       title: {
  //         en: item.stationStatusEN || '',
  //         ar: item.stationStatusAR || ''
  //       }
  //     }
  //   });
  // }

  setPetrolStationServices(items: any) {
    const itemsWithoutDuplicate = this.getUniqueServices(items);
    return (itemsWithoutDuplicate || []).map((item: any) => {
      return {
        key: item.titleEN || '',
        title: {
          en: item.titleEN || '',
          ar: item.titleAR || ''
        }
      }
    });
  }


  getUniqueServices(data: any) {
    let temp = [];
    for (let index = 0; index < data.length; index++) {
      for (let index2 = 0; index2 < (data[index].availableServices || []).length; index2++) {
        if (!this.isServiceExist(temp, data[index].availableServices[index2].titleEN)) temp.push(data[index].availableServices[index2]);
      }
    }
    return temp;
  }

  isServiceExist(services: any, service: string) {
    for (let index = 0; index < services.length; index++) {
      if (services[index].titleEN === service) return true;
    }
    return false;
  }

  // getArrayWithoutDuplicateByKey(array: any, key: string) {
  //   return array.reduce((unique: any, o: any) => {
  //     if (!unique.some((obj: any) => obj[key] === o[key])) unique.push(o);
  //     return unique;
  //   }, []);
  // }

  stationChange(option: any) {
    this.stationDDL.selected = option;
  }

  // statusChange(option: any) {
  //   // this.statusDDL.selected = option;
  // }

  // servicesChange(option: any) {
  //   this.servicesDDL.selected = option;
  // }

  changeAllDay(option: any) {
    this.allDay.value = option;
  }

  changeLimitedHours(option: any) {
    this.limitedHours.value = option;
  }

  // locationChange(selection: any) {
  //   this.addresses.selected = selection;
  // }

  cancel() {
    this.isSubmitted = false;
    this.searchResult = [];
    this.filter = [];
  }

  selectStation(id: string) {
    const selectedStationType = this.stationDDL.selected?.key || 'all';
    const filteredSelectedStationByType = (this.allDataFiltered?.[selectedStationType]) || [];

    const index = +filteredSelectedStationByType.findIndex((item: any) => item.nameEN === id);
    this.selectedStation = {
      index: index,
      data: filteredSelectedStationByType[index]
    };
  }

  clear() {
    // this.statusDDL.selected = null;
    this.stationDDL.selected = null;
    // if (this.stationDDL.list?.[0]) this.stationDDL.selected = this.stationDDL.list[0];

    this.servicesDDL.selected = [];
    this.stationName = '';
    // this.addressesDDL.selected = null;
    this.getMapData(false);
  }

  enableGetUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem('location', JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude }));
      }, () => { }, {
        maximumAge: 10000,
        timeout: 5000,
        enableHighAccuracy: true
      });
    }
  }

  search() {
    this.enableGetUserLocation();
    const location = localStorage.getItem('location') ? JSON.parse(localStorage.getItem('location') || '') : CONFIGURATION.MAP;

    // const station = this.stationDDL.selected?.key;
    // const status = this.statusDDL.selected?.key;
    // const addresses = this.addresses.selected;
    // const selectedService = this.servicesDDL.selected?.[0]?.key;
    const selectedServices = this.servicesDDL.selected || [];



    // 
    let filter = [];

    if (selectedServices.length > 0) {
      for (let index = 0; index < selectedServices.length; index++) {
        filter.push(selectedServices[index]?.title?.[this.lang]);
      }
    } else {
      filter.push(this.lang === 'en' ? 'All' : 'الجميع');
    }



    // if (status) filter.push(status);
    // if (selectedService) filter.push(this.servicesDDL.selected?.[0]?.title?.[this.lang]);
    // if (addresses && addresses.length > 0) filter.push(...addresses);
    if (this.stationName) filter.push(this.stationName);
    // if (this.allDay.value) filter.push('INSPECTION_FILTER.OPEN_24_HOURS');
    // if (this.limitedHours.value) filter.push('SHOP.LIMITED_HOURS');
    this.filter = filter;
    // 

    const filteredData = (this.allData[this.stationDDL.selected?.key || 'all'] || []).filter((item: any) =>
      (this.stationName ? item && (
        (item.nameEN && item.nameEN.toLowerCase().indexOf(this.stationName.toLowerCase()) !== -1) ||
        (item.nameAR && item.nameAR.toLowerCase().indexOf(this.stationName.toLowerCase()) !== -1)
      ) : true) &&


      // (status ? item.stationStatusEN === status : true) &&
      // (addresses && addresses.length > 0 ? addresses.includes(item.address) : true) &&

      // (
      //   (this.allDay.value && this.limitedHours.value) || (!this.allDay.value && !this.limitedHours.value) ?
      //     true
      //     : (this.allDay.value ? item.is24_7 : !item.is24_7) && (this.limitedHours.value ? item.isLimtedHours : !item.isLimtedHours)
      // )

      // (this.selectedHours.length > 0 ? this.selectedHours.some((innerItem: any) => innerItem.id === item.workingHoursTypeId) : true) &&
      (selectedServices.length > 0 ? this.isServiceExistFilter(selectedServices, item.availableServices) : true)

      // (selectedService ? item.availableServices.some((service: any) => service.titleEN === selectedService) : true)



    );

    // selectedServices

    const sortedPoints = this.sortByDistance(filteredData, location.lat, location.lng);


    this.allDataFiltered[this.stationDDL.selected?.key ? this.stationDDL.selected?.key : 'all'] = sortedPoints;

    this.searchResult = sortedPoints.map((item: any) => {
      return {
        title: {
          en: item.nameEN || '',
          ar: item.nameAR || ''
        },
        desc: {
          en: item.descriptionEN || '',
          ar: item.descriptionAR || ''
        },
        phone: item.phoneNumber || '',
        // time: (item.is24_7 || false) ? 'INSPECTION_FILTER.OPEN_24_HOURS' : (item.workingHours || ''),
        time: this.lang === 'en' ? item.workingHoursTypeData.nameEn : item.workingHoursTypeData.nameAr,
        lat: item.latitued || '',
        lng: item.longitude || ''
      }
    });



    // 
    this.isSubmitted = true;
    // this.isSubmitted = true;
    // const station = this.stationDDL.selected?.key;
    // const selectedService = this.servicesDDL.selected?.key;
    // let data = {
    //   stationName: this.stationName,
    //   station: station,
    //   service: selectedService
    // }
    // const urlParams = this.objToURL(data);
    // this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/map${urlParams ? `?${urlParams}` : ``}`));
  }

  // objToURL(obj: any) {
  //   return Object.entries(obj).filter(([key, val]) => val).map(([key, val]) => `${key}=${val}`).join('&');
  // }

  isServiceExistFilter(selectedServices: any, servicesAvailableInItem: any) {
    return selectedServices.every((item: any) => this.innerServicesSearch(servicesAvailableInItem, item.title.en));
  }


  innerServicesSearch(services: any, service: string) {
    for (let index = 0; index < services.length; index++) {
      if (services[index].titleEN === service) return true;
    }
    return false;
  }

  sortByDistance(points: any, lat: string, lng: string) {
    return points.sort((a: any, b: any) => {
      const distA = this.distance(lat, lng, a.latitued, a.longitude);
      const distB = this.distance(lat, lng, b.latitued, b.longitude);
      return distA - distB;
    });
  }

  distance(lat1: any, lon1: any, lat2: any, lon2: any) {
    const radlat1 = Math.PI * lat1 / 180;
    const radlat2 = Math.PI * lat2 / 180;
    const theta = lon1 - lon2;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515; // Miles
    return dist;
  }


  changeStationType(station: any) {
    this.stationDDL.selected = station;
    this.servicesDDL.selected = [];
    this.stationName = '';
    this.getMapData(false);
  }

  onChangeSearchMap(selection: any) {
    const isAlreadyExist = this.servicesDDL.selected.some((item: any) => item.key === selection.key);
    if (isAlreadyExist) {
      // Remove it
      const index = this.servicesDDL.selected.findIndex((item: any) => item.key === selection.key);
      if (index !== -1) {
        this.servicesDDL.selected.splice(index, 1);
      }
    } else {
      // Add it
      this.servicesDDL.selected.push(selection);
    }
  }


}
