import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-product-and-service',
  templateUrl: './detail-product-and-service.component.html',
  styleUrls: ['./detail-product-and-service.component.scss']
})
export class DetailProductAndServiceComponent {
  @Input() lang: string = 'en';
  @Input() reverseOrder: boolean = false;
  @Input() data: any = {}

  isExternalMethod(link: string) {
    if (!link) return false;
    if (
      link.startsWith('//') ||
      link.startsWith('http://') ||
      link.startsWith('https://') ||
      link.startsWith('www.')
    ) {
      return true;
    }
    return false;
  }

}
