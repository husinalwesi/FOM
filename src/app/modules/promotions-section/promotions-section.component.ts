import { Component, Input } from "@angular/core";

@Component({
  selector: "app-promotions-section",
  templateUrl: "./promotions-section.component.html",
  styleUrls: ["./promotions-section.component.scss"],
})
export class PromotionsSectionComponent {
  @Input() promotionList: any = null;
  @Input() lang: string = 'en';
}
