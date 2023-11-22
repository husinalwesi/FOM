import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-btn-one',
  templateUrl: './btn-one.component.html',
  styleUrls: ['./btn-one.component.scss']
})
export class BtnOneComponent implements OnInit {
  @Input() link: string = "";
  @Input() text: string = "";
  @Input() textClass: string = "font-Futura-Bk-BT-Medium text-lg";
  @Input() seoDesc: string = "";
  @Input() svg: string = "";
  @Input() svgClass: string = "";
  @Input() isExternal: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() styleColor: string = "green-blue";//red-purple
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  constructor(private sharedService: SharedService,) { }

  ngOnInit(): void { }

  onClickFire() {
    if (!this.isDisabled) this.onClick.emit();
  }

  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }

}
