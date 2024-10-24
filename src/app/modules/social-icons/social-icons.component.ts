import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {
  @Input() innerClassess: string = 'gap-1';
  @Input() data: any = [];
  @Input() btnClassess: string = 'bg-white w-[22px] h-[22px]';
}
