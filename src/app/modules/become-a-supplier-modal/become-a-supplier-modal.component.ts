import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { Router } from "@angular/router";
import { SharedService } from "src/app/services/shared.service";
import { GUID } from "src/app/const/guid";

@Component({
  selector: 'app-become-a-supplier-modal',
  templateUrl: './become-a-supplier-modal.component.html',
  styleUrls: ['./become-a-supplier-modal.component.scss']
})
export class BecomeASupplierModalComponent {
  @Input() lang:string = 'en';
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  isVerified: boolean = false;
  flag:boolean = false
  isModalEnabled: boolean = false;
  isForm1Submitted: boolean = false;
  form1Data: any = {
    fullname: '',
    email: ''
  };
  modalMessage: any = {
    title: {
      en: '',
      ar: ''
    },
    description: {
      en: '',
      ar: ''
    }
  }
  constructor(
    private multimediaService: MultimediaService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService,
  ) {

  }

  openForm1() {
    this.resetForm1();
  }

  resetForm1() {
    this.isForm1Submitted = false;
    this.form1Data = {
      fullname: '',
      email: ''
    };
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getStaticMessage();
  }
  onSubmitForm1(form: any) {
    this.isForm1Submitted = true;
    if (form.valid && this.isVerified) {
      
      this.subscribeToTenderAlerts();
      
      

      // this.router.navigateByUrl(this.routeLocalizationPipe.transform('/tenders-and-supplier/tender-alert/success'));
    }
  }
  getStaticMessage() {
    this.multimediaService.getStaticMessage({ ID: GUID.woqod.success.tenderAlert }).subscribe((response) => {
      this.modalMessage = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        desc: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
      };
    });
  }
  closeModalFire() {
    this.closeModal.emit();
  }

  subscribeToTenderAlerts() {
    this.sharedService.enableFullLoader();
    let payload = {
      "fullName": this.form1Data.fullname,
      "email": this.form1Data.email
    };
    
    this.multimediaService.subscribeToTenderAlerts(payload).subscribe((response) => {
      this.flag = true;
        // this.closeModalFire();
        // this.resetForm1();
        this.sharedService.disableFullLoader();
      

      
    });
    
  }

}