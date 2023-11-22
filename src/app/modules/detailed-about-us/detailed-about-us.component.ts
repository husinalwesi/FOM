import { Component, Input } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-detailed-about-us",
  templateUrl: "./detailed-about-us.component.html",
  styleUrls: ["./detailed-about-us.component.scss"],
})
export class DetailedAboutUsComponent {
  @Input() lang: string = "en";
  @Input() backgroundImage: string = '';
  @Input() reverseOrder: boolean = false;
  @Input() area: any = {
    areaOneImage: "area2Image",
    areaOneTitle: {

    },
    areaOneHeading: {

    },
    areaOneDescription: {
 
    },
    areaOneLink: "",
  };
  constructor(private sharedService: SharedService){}
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
