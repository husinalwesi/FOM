import { Component, Input, OnInit } from '@angular/core';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  isClientSide: boolean = this.platformService.isClient();
  @Input() src: string = "";
  @Input() customClass: string = "";
  @Input() label: string = "Woqod";
  @Input() stretch: boolean = false;
  @Input() width: string = "90";
  @Input() height: string = "";  
  @Input() fill: string = "";
  @Input() stroke: string = "";
  @Input() viewBox: string = "";

  constructor(public platformService: PlatformService) { }

  ngOnInit(): void {
  }

}
