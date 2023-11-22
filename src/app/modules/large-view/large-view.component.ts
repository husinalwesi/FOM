import { Component, Input } from "@angular/core";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-large-view",
  templateUrl: "./large-view.component.html",
  styleUrls: ["./large-view.component.scss"],
})
export class LargeViewComponent {
  @Input() lang: string = 'en';
  @Input() data: any;
  constructor(private sharedService: SharedService){}
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }

}
