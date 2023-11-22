import { Component, Input, SimpleChanges, isStandalone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { CONFIGURATION } from '../../const/enum';
import { GUID } from "src/app/const/guid";
@Component({
  selector: 'app-full-map',
  templateUrl: './full-map.component.html',
  styleUrls: ['./full-map.component.scss']
})
export class FullMapComponent {
  filter: any = [];
  @Input() searchByURL: any = null;
  stationName: string = '';
  allDataFiltered: any = [];
  workingHours: any = [];

  workingHoursEle: any = [];
  selectedStation: any = null;
  isLoading: boolean = true;
  lang: string = 'en';
  image: string = "assets/images/hero-carousel/2.webp";
  allData: any = [];
  isSubmitted: boolean = false;
  selectedHours: any = [];
  locationsTop: any = [
    {
      title: 'PETROL_STATION.FUEL',
      name: 'fuel',
      value: true
    },
    {
      title: 'PETROL_STATION.SIDRA',
      name: 'sidra',
      value: false
    },
    {
      title: 'PETROL_STATION.FAHES',
      name: 'fahes',
      value: false
    }
  ];

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



      const allowedTypes: any = {
        fuel: [
          GUID.woqod.map.Sidra,//Sidra
          GUID.woqod.map.Petrol_station,//Petrol Station
          GUID.woqod.map.electric//electric Station
        ],
        sidra: [GUID.woqod.map.Sidra],//Sidra
        fahes: []
      };

      const selectedOptionTop = this.getSelectedTopLocation();

      const filteredTypes = (response || []).filter((station: any) => (allowedTypes?.[selectedOptionTop] || []).includes(station.stationTypesID)) || [];



      if (selectedOptionTop === 'sidra') {
        this.stationDDL.list = [
          {
            key: 'standAlone',
            title: {
              en: 'PETROL_STATION.STAND_ALONE',
              ar: 'PETROL_STATION.STAND_ALONE',
            },
          },
          {
            key: 'allTypes',
            title: {
              en: 'PETROL_STATION.ALL_TYPES',
              ar: 'PETROL_STATION.ALL_TYPES'
            },
          }
        ];
      } else {

        // this.stationDDL.list = filteredTypes.map((station: any) => {
        //   return {
        //     key: station.stationTypesID || '',
        //     title: {
        //       en: station.locationType_En || '',
        //       ar: station.locationType_Ar || ''
        //     },
        //   }
        // });

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

      }




      // if (this.searchByURL?.station) {
      //   this.stationDDL.selected = this.stationDDL.list.find((item: any) => item.key === this.searchByURL?.station) || null;
      // } else {
      //   if (this.stationDDL.list?.[0]) this.stationDDL.selected = this.stationDDL.list[0];
      // }

      // if (this.stationDDL.list?.[0]) this.stationDDL.selected = this.stationDDL.list[0];

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

  resetTime() {
    for (let index = 0; index < this.workingHoursEle.length; index++) {
      this.workingHoursEle[index].value = false;
    }
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

  getSelectedTopLocation() {
    return this.locationsTop.find((item: any) => item.value)?.name || '';
  }

  getMapData() {
    this.isLoading = true;

    const selectedOptionTop = this.getSelectedTopLocation();
    let locationTypeId = this.stationDDL.selected?.key;

    if (selectedOptionTop === 'sidra') {
      // c7b91ac0-5a11-499a-9d81-d2e8bea1be55 the correct one
      locationTypeId = GUID.woqod.map.Sidra;

      // locationTypeId = 'e1d4bcc3-4de9-4609-b22a-05dc2665f695'; // use for test
    }
    let payload = locationTypeId ? { locationTypeId: locationTypeId } : {};
    this.multimediaService.getMapDataNew(payload).subscribe((response) => {
      this.allData = ((response || []).filter((station: any) => station.latitued && station.latitued !== '0' && station.longitude && station.longitude !== '0') || [] || []).map((item: any) => {
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

      // this.statusDDL.list = this.setPetrolStationStatus(response);//removed
      this.servicesDDL.list = this.setPetrolStationServices(response);
      // console.log(this.servicesDDL);

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
    // if (this.searchByURL?.station || this.searchByURL?.service) {
    //   this.submitHandler(null);
    // }
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
    // this.getMapData();

    if (this.getSelectedTopLocation() === 'sidra') {
      // keep empty..
    } else {
      this.getMapData();
    }

  }

  // statusChange(option: any) {
  //   this.statusDDL.selected = option;
  // }

  // servicesChange(option: any) {
  //   this.servicesDDL.selected = option;
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

  submitHandler(data: any) {
    this.enableGetUserLocation();
    const location = localStorage.getItem('location') ? JSON.parse(localStorage.getItem('location') || '') : CONFIGURATION.MAP;
    // if (data?.stationName) 
    this.stationName = data.stationName;
    // console.log(data);

    const selectedOptionTop = this.getSelectedTopLocation();
    const station = this.stationDDL.selected?.key;
    // const status = this.statusDDL.selected?.key;
    // const addresses = this.addresses.selected;
    // const selectedService = this.servicesDDL.selected?.key;
    const selectedServices = this.servicesDDL.selected || [];
    // 
    let filter = [];
    filter.push(selectedOptionTop);
    if (station) filter.push(this.stationDDL.selected?.title?.[this.lang]);
    // if (status) filter.push(status);
    // if (selectedService) filter.push(this.servicesDDL.selected?.title?.[this.lang]);

    // if (selectedServices.length > 0) {
    //   for (let index = 0; index < selectedServices.length; index++) {
    //     filter.push(selectedServices[index]?.title?.[this.lang]);
    //   }
    // } else {
    //   filter.push(this.lang === 'en' ? 'All' : 'الجميع');
    // }

    for (let index = 0; index < this.servicesDDL.selected.length; index++) {
      filter.push(this.servicesDDL.selected[index].title[this.lang]);
    }

    for (let index = 0; index < this.workingHoursEle.length; index++) {
      if (this.workingHoursEle[index].value) filter.push(this.workingHoursEle[index].title);
    }

    // if (addresses && addresses.length > 0) filter.push(...addresses);

    // if (this.allDay.value) filter.push('INSPECTION_FILTER.OPEN_24_HOURS');
    // if (this.limitedHours.value) filter.push('SHOP.LIMITED_HOURS');

    if (this.stationName) filter.push(this.stationName);

    this.filter = filter;
    // 



    const isSidra = selectedOptionTop === 'sidra';
    // console.log(this.servicesDDL);
    const filteredData = this.allData.filter((item: any) =>
      // (station ? item.stationTypeEN === station : true) && // already inside this type
      // (status ? item.stationStatusEN === status : true) &&
      // (addresses && addresses.length > 0 ? addresses.includes(item.address) : true) &&

      // (
      //   (this.allDay.value && this.limitedHours.value) || (!this.allDay.value && !this.limitedHours.value) ?
      //     true
      //     : (this.allDay.value ? item.is24_7 : !item.is24_7) && (this.limitedHours.value ? item.isLimtedHours : !item.isLimtedHours)
      // )

      // "stationServicesID": "81a96a43-54fb-42a8-8186-63ba68046bbe"
      // standAlone

      // anything else not that id

      // this.stationDDL


      isSidra ? (
        // sidra scope
        // true
        (
          (this.stationName ? item && (
            (item.nameEN && item.nameEN.toLowerCase().indexOf(this.stationName.toLowerCase()) !== -1) ||
            (item.nameAR && item.nameAR.toLowerCase().indexOf(this.stationName.toLowerCase()) !== -1)
          ) : true) &&


            this.stationDDL.selected?.key === 'standAlone' ?
            item.availableServices.some((service: any) => service.servicesId === '81a96a43-54fb-42a8-8186-63ba68046bbe') :
            item.availableServices.some((service: any) => service.servicesId !== '81a96a43-54fb-42a8-8186-63ba68046bbe')
        )
      ) :

        (
          // not sidra scope
          (this.stationName ? item && (
            (item.nameEN && item.nameEN.toLowerCase().indexOf(this.stationName.toLowerCase()) !== -1) ||
            (item.nameAR && item.nameAR.toLowerCase().indexOf(this.stationName.toLowerCase()) !== -1)
          ) : true) &&


          // (this.isAtLeastOneTimeSelected() ? this.getSelectedTime().includes(item.workingHours) : true) &&
          (selectedServices.length > 0 ? this.isServiceExistFilter(selectedServices, item.availableServices) : true)
        )
    );

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
    this.isSubmitted = true;
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

  resetHandler(event: any) {
    // this.allDay.value = false;
    // this.limitedHours.value = false;
    // this.addresses.selected = [];
    this.servicesDDL.selected = [];
    this.stationName = '';
    this.selectedHours = [];
    // this.statusDDL.selected = null;
    this.stationDDL.selected = null;
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

  topLocationsEmitHandler(data: any) {
    for (let index = 0; index < this.locationsTop.length; index++) {
      if (this.locationsTop[index].name === data.name) this.locationsTop[index].value = true;
      else this.locationsTop[index].value = false;
    }
    this.getData();
  }

}
