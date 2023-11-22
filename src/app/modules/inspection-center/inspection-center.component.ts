import { Component, Input, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { CONFIGURATION } from 'src/app/const/enum';

@Component({
  selector: 'app-inspection-center',
  templateUrl: './inspection-center.component.html',
  styleUrls: ['./inspection-center.component.scss']
})
export class InspectionCenterComponent {
  filter: any = [];
  @Input() searchByURL: any = null;
  workingHours: any = [];

  workingHoursEle: any = [];
  // workingHoursEle: any = {
  //   selected: null,
  //   placeholder: '',
  //   list: []
  // };
  selectedStation: any = null;
  isLoading: boolean = true;
  allDataFiltered: any = [];
  lang: string = 'en';
  image: string = "assets/images/hero-carousel/2.webp";
  allData: any = [];
  isSubmitted: boolean = false;
  // selectedHours: any = [];

  searchResult: any = [];

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

  // addresses: any = {
  //   selected: [],
  //   data: []
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

  constructor(
    private translate: TranslateService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   // this.searchByURL
  // }

  getData() {
    this.getStationTypes();
    // this.getMapData();
  }

  getStationTypes() {
    this.multimediaService.getStationTypes().subscribe((response) => {
      this.stationDDL.list = (response || []).map((station: any) => {
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



      // if (this.searchByURL?.station) {
      //   this.stationDDL.selected = this.stationDDL.list.find((item: any) => item.key === this.searchByURL?.station) || null;
      // } else {
      //   if (this.stationDDL.list?.[0]) this.stationDDL.selected = this.stationDDL.list[0];
      // }

      // if (this.stationDDL.list?.[0]) this.stationDDL.selected = this.stationDDL.list[1];
      this.getAllWorkingHoursTypes();
    });
  }

  getAllWorkingHoursTypes() {
    this.multimediaService.GetAllWorkingHoursTypes().subscribe((response) => {
      // 

      this.workingHours = (response || []);
      this.workingHoursEle = (response || []).map((item: any) => {
        return {
          name: item.detailesId,
          title: this.lang === 'en' ? item.nameEn : item.nameAr,
          value: false
        };
      });

      this.getMapData();
    });
  }

  // getMapData() {
  //   this.isLoading = true;
  //   this.multimediaService.getMapData().subscribe((response) => {
  //     this.allData = (response || []);
  //     this.stationDDL.list = this.setPetrolStationType(response);
  //     // this.statusDDL.list = this.setPetrolStationStatus(response);
  //     this.servicesDDL.list = this.setPetrolStationServices(response);
  //     // this.addresses.data = this.setPetrolStationAddress(response);
  //     this.applySearchByURL();
  //   });
  // }

  getMapData() {
    this.isLoading = true;
    let payload = this.stationDDL.selected?.key ? { locationTypeId: this.stationDDL.selected?.key } : {};
    this.multimediaService.getMapDataNew(payload).subscribe((response) => {
      this.allData = ((response || []).filter((station: any) => station.latitued && station.latitued !== '0' && station.longitude && station.longitude !== '0') || [] || []).map((item: any) => {
        // this.allData = ((response || []).filter((station: any) => station.latitued && station.longitude) || [] || []).map((item: any) => {
        // this.allData = (response || []).map((item: any) => {
        const stationType = this.stationDDL.list.find((stationItem: any) => +stationItem.locationTypeId === +item.locationTypeID);

        return {
          ...item,
          ...{
            workingHoursTypeData: this.workingHours.find((workingItem: any) => workingItem.detailesId === item.workingHours),
            mapMarker: stationType?.locationTypeMarkerID
          }
        }
      });

      this.allDataFiltered = this.allData || [];
      // console.log(this.allDataFiltered);

      // this.statusDDL.list = this.setPetrolStationStatus(response);//removed
      this.servicesDDL.list = this.setPetrolStationServices(response);
      // this.addressesDDL.list = this.setPetrolStationAddress(response);
      // this.isLoading = false;
      // this.cdk.detectChanges();
      this.applySearchByURL();
    });
  }

  applySearchByURL() {

    // station: this.route.snapshot.queryParams.station || '',
    // stationName: this.route.snapshot.queryParams.stationName || '',
    // service: this.route.snapshot.queryParams.service || ''

    // if (this.searchByURL?.station) this.stationDDL.selected = this.stationDDL.list.find((item: any) => item.key === this.searchByURL?.station) || null;
    // if (this.searchByURL?.service) this.servicesDDL.selected = this.servicesDDL.list.find((item: any) => item.key === this.searchByURL?.service) || null;

    // if (this.searchByURL?.status) this.statusDDL.selected = this.statusDDL.list.find((item: any) => item.key === this.searchByURL?.status) || null;
    // if (this.searchByURL?.address) this.addresses.selected = this.addresses.data.filter((item: any) => item === this.searchByURL?.address) || [];
    this.isLoading = false;
    // submit the form
    if (this.searchByURL?.station || this.searchByURL?.service) {
      this.submitHandler(true);
    }
  }

  setPetrolStationAddress(items: any) {
    const itemsWithoutDuplicate = this.getArrayWithoutDuplicateByKey(items, 'address');
    return (itemsWithoutDuplicate || []).map((item: any) => item.address || '');
  }

  setPetrolStationType(items: any) {
    const itemsWithoutDuplicate = this.getArrayWithoutDuplicateByKey(items, 'stationTypeEN');
    return (itemsWithoutDuplicate || []).map((item: any) => {
      return {
        key: item.stationTypeEN || '',
        title: {
          en: item.stationTypeEN || '',
          ar: item.stationTypeAR || ''
        }
      }
    });
  }

  setPetrolStationStatus(items: any) {
    const itemsWithoutDuplicate = this.getArrayWithoutDuplicateByKey(items, 'stationStatusEN');
    return (itemsWithoutDuplicate || []).map((item: any) => {
      return {
        key: item.stationStatusEN || '',
        title: {
          en: item.stationStatusEN || '',
          ar: item.stationStatusAR || ''
        }
      }
    });
  }

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



  getArrayWithoutDuplicateByKey(array: any, key: string) {
    return array.reduce((unique: any, o: any) => {
      if (!unique.some((obj: any) => obj[key] === o[key])) unique.push(o);
      return unique;
    }, []);
  }

  stationChange(option: any) {
    this.stationDDL.selected = option;
    this.servicesDDL.selected = [];
    this.resetTime();
    this.getMapData();
  }

  // statusChange(option: any) {
  //   this.statusDDL.selected = option;
  // }

  servicesChange(selection: any) {
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

  changeAllDay(option: any) {
    this.allDay.value = option;
  }

  changeLimitedHours(option: any) {
    this.limitedHours.value = option;
  }

  // locationChange(selection: any) {
  //   this.addresses.selected = selection;
  // }

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

  submitHandler(event: any) {
    this.enableGetUserLocation();
    const location = localStorage.getItem('location') ? JSON.parse(localStorage.getItem('location') || '') : CONFIGURATION.MAP;

    const selectedServices = this.servicesDDL.selected || [];

    const station = this.stationDDL.selected?.key;
    // const status = this.statusDDL.selected?.key;
    // const addresses = this.addresses.selected;
    // const selectedService = this.servicesDDL.selected?.key;//hussein

    // 
    let filter = [];
    if (station) filter.push(this.stationDDL.selected?.title?.[this.lang]);
    // if (status) filter.push(status);
    // if (selectedService) filter.push(this.servicesDDL.selected?.title?.[this.lang]);//hussein
    // if (addresses && addresses.length > 0) filter.push(...addresses);
    // console.log();

    for (let index = 0; index < this.servicesDDL.selected.length; index++) {
      filter.push(this.servicesDDL.selected[index].title[this.lang]);
    }


    for (let index = 0; index < this.workingHoursEle.length; index++) {
      if (this.workingHoursEle[index].value) filter.push(this.workingHoursEle[index].title);
    }

    // for (let index = 0; index < this.selectedHours.length; index++) {
    //   const item = this.workingHoursEle.find((item: any) => item.name === this.selectedHours[index].id);

    //   if (item) {
    //     if (this.lang === 'en') filter.push(item?.nameEn);
    //     else filter.push(item?.nameAr);
    //   }

    //   // if (item) {

    //   // }
    // }

    // if(this.selectedHours.length > 0)
    // if (this.allDay.value) filter.push('INSPECTION_FILTER.OPEN_24_HOURS');
    // if (this.limitedHours.value) filter.push('SHOP.LIMITED_HOURS');
    this.filter = filter;
    // 

    // console.log(this.allData);

    // const filteredData = this.allData;
    // fix times and services

    // console.log(selectedServices);


    const filteredData = this.allData.filter((item: any) =>
      // (station ? item.stationTypeEN === station : true) && // already inside this type
      // (status ? item.stationStatusEN === status : true) &&
      // (addresses && addresses.length > 0 ? addresses.includes(item.address) : true) &&

      // (
      //   (this.allDay.value && this.limitedHours.value) || (!this.allDay.value && !this.limitedHours.value) ?
      //     true
      //     : (this.allDay.value ? item.is24_7 : !item.is24_7) && (this.limitedHours.value ? item.isLimtedHours : !item.isLimtedHours)
      // )

      // (this.selectedHours.length > 0 ? this.selectedHours.some((innerItem: any) => innerItem.id === item.workingHours) : true)
      // 
      (this.isAtLeastOneTimeSelected() ? this.getSelectedTime().includes(item.workingHours) : true) &&
      (selectedServices.length > 0 ? this.isServiceExistFilter(selectedServices, item.availableServices) : true)
    );

    // 

    const sortedPoints = this.sortByDistance(filteredData, location.lat, location.lng) || [];

    this.allDataFiltered = sortedPoints;
    // console.log(this.allDataFiltered);


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

        lat: item.latitued,
        lng: item.longitude,
      }
    });
    // 
    this.isSubmitted = event;
  }

  isAtLeastOneTimeSelected() {
    return this.workingHoursEle.some((item: any) => item.value) || false;
  }

  getSelectedTime() {
    return this.workingHoursEle.filter((item: any) => item.value).map((item: any) => item.name) || [];
  }

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

  resetTime() {
    for (let index = 0; index < this.workingHoursEle.length; index++) {
      this.workingHoursEle[index].value = false;
    }
  }

  resetHandler(event: any) {
    // this.allDay.value = false;
    // this.limitedHours.value = false;
    // this.addresses.selected = [];
    this.servicesDDL.selected = [];
    // this.selectedHours = [];

    this.resetTime();

    // this.statusDDL.selected = null;
    this.stationDDL.selected = null;

    // this.stationDDL.selected = null;

    // if (this.stationDDL.list?.[0]) this.stationDDL.selected = this.stationDDL.list[0];
    // this.filter = [];
    // this.filterDDL.selected = null;
    this.getMapData();
  }

  cancel() {
    this.isSubmitted = false;
    this.searchResult = [];
    // this.filter = [];
  }

  selectStation(id: string) {
    const index = +this.allDataFiltered.findIndex((item: any) => item.nameEN === id);
    this.selectedStation = {
      index: index,
      data: this.allData[index]
    };
  }

  workingHoursEmitter(item: any) {
    for (let index = 0; index < this.workingHoursEle.length; index++) {
      if (this.workingHoursEle[index].name === item.name) this.workingHoursEle[index].value = item.value;
    }
  }

}
