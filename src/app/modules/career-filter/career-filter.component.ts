import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';

@Component({
  selector: 'app-career-filter',
  templateUrl: './career-filter.component.html',
  styleUrls: ['./career-filter.component.scss']
})
export class CareerFilterComponent {
  @Output() filterSubmit: EventEmitter<any> = new EventEmitter();
  @Input() lang: string = 'en';
  selectedTags: any = {};
  filterOpen: boolean = false;
  tags: any = {
    en: [],
    ar: []
  };
  codes: any = [];
  keyword: string = "";
  salaryRange: any = {
    setting: {
      floor: 0,
      ceil: 100000,
      step: 100,
    },
    value: {
      min: 0,
      max: 100000
    }
  };
  locationDDL: any = {
    selected: null,
    placeholder: 'CAREER_FILTER.SELECT_LOCATION',
    list: []
  };

  departmentDDL: any = {
    selected: null,
    placeholder: 'CAREER_FILTER.SELECT_DEPARTMENTS',
    list: []
  };

  constructor(
    private multimediaService: MultimediaService,
  ) {
  }

  onSubmit(form: any) {
    this.filterSubmit.emit({
      keyword: this.keyword,
      location: this.locationDDL.selected,
      department: this.departmentDDL.selected,
      salaryRange: this.salaryRange.value,
      codes: this.codes.filter((code: any) => code.value),
      tags: this.selectedTags[this.lang]
    });
  }

  tagsSelectionChange(selections: any) {
    this.selectedTags = selections;
  }

  locationChange(option: any) {
    this.locationDDL.selected = option;
  }

  departmentChange(option: any) {
    this.departmentDDL.selected = option;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getLocations();
    this.getDepartments();
    this.getTags();
    this.getJobCodes();
  }

  getLocations() {
    let payload = {};
    this.multimediaService.getCareerLocations(payload).subscribe((response) => {
      this.locationDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getDepartments() {
    let payload = {};
    this.multimediaService.getCareerDepartments(payload).subscribe((response) => {
      this.departmentDDL.list = (response || []).map((item: any) => {
        return {
          key: item.departmentID,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getTags() {
    let payload = {};
    this.multimediaService.getTags(payload).subscribe((response) => {

      this.tags.en = (response || []).map((item: any) => {
        return {
          id: item.detailesId,
          title: item.nameEn,
          isSelected: false
        }
      });

      this.tags.ar = (response || []).map((item: any) => {
        return {
          id: item.detailesId,
          title: item.nameAr,
          isSelected: false
        }
      });

    });
  }

  getJobCodes() {
    let payload = {};
    this.multimediaService.getJobsCodes(payload).subscribe((response) => {
      this.codes = (response || []).map((item: any) => {
        return {
          value: false,
          total: item.totalJobs,
          title: {
            en: item.jobCodeEN,
            ar: item.jobCodeAR
          }
        }
      });
    });
  }
  toggleFilter() {
    this.filterOpen = !this.filterOpen;
  }

}