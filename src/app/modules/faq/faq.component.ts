import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  @Input() lang: string = "en";
  @Input() index: number = 0;
  @Input() data: any = {};
  @Input() bgColor: string = "bg-white";


  openSummary(e: any) {
    if (typeof window !== 'undefined') {
      e.preventDefault();
      let group = document.querySelectorAll(".details-group")
      let item = document.getElementById(`index-${this.index}`)
      let hasOpen = item?.hasAttribute('open')
      group.forEach((item) => {
        item.removeAttribute('open')
      })

      if (hasOpen) {
        item?.removeAttribute('open')
      } else {
        item?.setAttribute('open', '')
      }
    }
  }

  // closeSummary(e: any) {
  //   e.preventDefault();
  //   document.getElementById(`index-${this.index}`)?.removeAttribute('open')
  // }
}
