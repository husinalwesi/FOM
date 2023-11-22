import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';

@Component({
  selector: 'app-become-supplier',
  templateUrl: './become-supplier.component.html',
  styleUrls: ['./become-supplier.component.scss']
})
export class BecomeSupplierComponent {
  @Input() data: any | any[] = [{}];
  @Input() lang: string = 'en';
  isTenderalertModalEnabled: boolean = false;
  isBecomeASupplierModalEnabled: boolean = false;
  isSubscriptionModalEnabled: boolean = false;

  constructor(
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
  ) {
  }

  onClickFire(item: any) {
    if (item.btn.modal === "supplier") {
      this.isBecomeASupplierModalEnabled = true;
    } else if (item.btn.modal === "request-tenders") {
      this.isTenderalertModalEnabled = true;
    }
    else if (item.btn.modal === "subscription") {
      this.isSubscriptionModalEnabled = true;
    }
    else if (item.btn.link[this.lang] === "become-a-supplier") {
      this.isTenderalertModalEnabled = true;
    }
    else {
      this.router.navigateByUrl(this.routeLocalizationPipe.transform(item.btn.link));
    }
  }

}
