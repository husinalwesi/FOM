import { Component, Input } from "@angular/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { ActivatedRoute, Router } from "@angular/router";
import { v4 as uuidv4 } from "uuid";
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';


@Component({
  selector: "app-tender-informaton-new",
  templateUrl: "./tender-informaton-new.component.html",
  styleUrls: ["./tender-informaton-new.component.scss"],
})
export class TenderInformatonNewComponent {
  @Input() isModalEnabled1: boolean = false;
  @Input() lang: string = "en";
  @Input() data: any;
  @Input() docs: any;
  isSubmitted: boolean = false;
  checkValidate: boolean = false;
  constructor(
    private multimediaService: MultimediaService,
    private router: Router,
    private route: ActivatedRoute,
    private routeLocalizationPipe: RouteLocalizationPipe,

  ) { }
  formData: any = {
    crNumber: "",
    name: "",
    email: "",
    zoneNumber: "",
    streetNumber: "",
    building: "",
    unit: "",
  };
  CRNumberFile: any = {
    label: "",
    file: null,
    url: "",
  };

  getResetFromData() {
    this.formData = {
      crNumber: "",
      name: "",
      email: "",
      zoneNumber: "",
      streetNumber: "",
      building: "",
      unit: "",
    };
    this.CRNumberFile = {
      label: "",
      file: null,
      url: "",
    };
    console.log(this.formData);
    console.log(this.CRNumberFile);
  }
  skipGetIDwithPaid: boolean = false;
  onSubmit(form: any, skipGetIDwithPaid: boolean = false) {
    this.isSubmitted = true;
    this.skipGetIDwithPaid = skipGetIDwithPaid;
    if (form.valid && this.CRNumberFile.file) {
      this.sendData();

    }
  }
  sendData() {
    const formData = new FormData();
    formData.append("crNumber", this.formData.crNumber);
    formData.append("name", this.formData.name);
    formData.append("email", this.formData.email);
    formData.append("tenderDetailsID", uuidv4());
    formData.append("requestedByID", uuidv4());
    formData.append("zoneNumber", this.formData.zoneNumber);
    formData.append("streetNumber", this.formData.streetNumber);
    formData.append("building", this.formData.building);
    formData.append("unit", this.formData.unit);
    formData.append("crNumberFile", this.CRNumberFile.file);

    this.multimediaService.tenderDocument(formData).subscribe(
      (response) => {
        this.isModalEnabled1 = false;
        this.getResetFromData();
        if (!this.skipGetIDwithPaid) {
          this.getIDwithPaid(response);
        } else {
          this.router.navigateByUrl(this.routeLocalizationPipe.transform('/tenders-and-supplier/tender-request/success'));
        }
      },
      (error) => {
        console.error("Error submitting feedback", error);
      }
    );
  }
  crCretificateEmitHandler(event: any) {
    this.CRNumberFile.file = event;
  }
  getIDwithPaid(id: string) {
    this.multimediaService.getCheckPaid({ id: id }).subscribe(
      (response) => {
        if (response) {
          this.router.navigateByUrl(this.routeLocalizationPipe.transform('/tenders-and-supplier/tender-request/success'));
        } else {
        }

      },
      (error) => {
        console.error("Error submitting Paid", error);
      }
    );
  }
  isFormEnabled:boolean = false;
  getCheckValidate(form: any) {

    if (form.controls.crNumber.valid) {

      const id = this.formData.crNumber;

      this.multimediaService.getRentShopValidate({ id: id }).subscribe(

        (response) => {

          console.log(response);

          this.checkValidate = true;

          this.isFormEnabled = true; // Enable the form inputs

        },

        (error) => {

          this.checkValidate = false;

          console.error("Error:", error);

          this.isFormEnabled = false; // Keep the form inputs disabled

        }

      );

    } else {

      alert('field cr is not valid');

    }

  }

}
