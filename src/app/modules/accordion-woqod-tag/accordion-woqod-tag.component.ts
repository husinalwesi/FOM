import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-woqod-tag',
  templateUrl: './accordion-woqod-tag.component.html',
  styleUrls: ['./accordion-woqod-tag.component.scss']
})
export class AccordionWoqodTagComponent {
  @Input() lang: string = "en";
  @Input() data: any = [];

  openSummary(e: any, index: number) {
    if (typeof window !== 'undefined') {
      e.preventDefault();
      let group = document.querySelectorAll(".accordion-details")
      let item = document.getElementById(`index-${index}`)
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
}
