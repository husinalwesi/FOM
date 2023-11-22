import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
// import { MultimediaService } from 'src/app/services/apis/multimedia.service';
// import { Router } from "@angular/router";

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.scss']
})
export class GeneralDetailsComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() prevStep: EventEmitter<any> = new EventEmitter();

  qidFile: any = {
    label: 'E_TAG.QID',
    accept: ['pdf', 'word', 'jpg', 'png'],
    isRequired: true,
    file: null,
    url: ""
  }

  isSubmitted: boolean = false;
  formData: any = {
    name: '',
    nameAR: '',
    email: '',
    mobileNumber: '',
    numberOfTag: '',
    qid: '',
    zoneNumber: '',
    streetNumber: '',
    building: '',
    unit: '',
    poBox: '',
    faxNumber: ''
  }
  constructor(
    // private multimediaService: MultimediaService,
    // private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.getSavedData();
  }

  getSavedData() {
    const savedFormData = isPlatformBrowser(this.platformId) ? localStorage.getItem('etagForm') : null;
    if (!savedFormData) return;
    const savedFormDataJSON = JSON.parse(savedFormData);
    // 
    this.formData.name = savedFormDataJSON?.generalDetails?.name || '';
    this.formData.nameAR = savedFormDataJSON?.generalDetails?.nameAR || '';
    this.formData.email = savedFormDataJSON?.generalDetails?.email || '';
    this.formData.numberOfTag = savedFormDataJSON?.generalDetails?.numberOfTag || '';
    this.formData.qid = savedFormDataJSON?.generalDetails?.qid || '';
    this.formData.zoneNumber = savedFormDataJSON?.generalDetails?.zoneNumber || '';
    this.formData.streetNumber = savedFormDataJSON?.generalDetails?.streetNumber || '';
    this.formData.building = savedFormDataJSON?.generalDetails?.building || '';
    this.formData.unit = savedFormDataJSON?.generalDetails?.unit || '';
  }

  onSubmit(form: any, isSaveForLater = false) {
    this.isSubmitted = true;
    if (form.valid && this.qidFile.file) {
      // for now keep it as submit
      this.nextStep.emit({ ...this.formData, ...{ qidFile: this.qidFile.file, isSaveForLater: isSaveForLater } });
    }
  }



  back() {
    history.back();
    // this.prevStep.emit();
  }

  // saveForLater(form: any) {
  //   this.isSubmitted = true;
  //   if (form.valid) {
  //     // for now keep it as submit
  //     this.nextStep.emit(this.formData);
  //   }
  // }

}
