import { Component } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSideMenuActive: boolean = false;

  constructor(
    private resizeService: ResizeService,
  ) {

  }

  // toggleSideMenu(e: any) {
  //   this.updateSideBar(!this.isSideMenuActive);
  // }

  // updateSideBar(val: boolean) {
  //   if (val == this.isSideMenuActive) return;
  //   this.isSideMenuActive = val;
  //   if (typeof window !== 'undefined') {
  //     document.body.style.overflow = val ? `hidden` : `auto`;
  //   }
  // }

  // ngAfterViewInit(): void {
  //   this.resizeService.screenWidthChange$.subscribe(data => { if (data.width > 640) this.updateSideBar(false) });
  // }

}
