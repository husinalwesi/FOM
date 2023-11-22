import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-full-loader',
  templateUrl: './full-loader.component.html',
  styleUrls: ['./full-loader.component.scss']
})
export class FullLoaderComponent {
  isEnabled: boolean = false;
  fireCloseAnimation: boolean = false;

  constructor(
    private sharedService: SharedService
  ) {
    this.enableListener();
    // setTimeout(() => {
    //   this.enableLoader();
    // }, 2000);

    // setTimeout(() => {
    //   this.disableLoader();
    // }, 5000);
  }

  enableLoader() {
    if (typeof window !== 'undefined') {
      this.isEnabled = true;
      document.body.style.overflow = `hidden`;
    }
  }

  disableLoader() {
    if (typeof window !== 'undefined') {
      this.fireCloseAnimation = true;
      setTimeout(() => {
        this.isEnabled = false;
        this.fireCloseAnimation = false;
        document.body.style.overflow = `auto`;
      }, 300);
    }
  }

  enableListener() {
    let _this = this;
    let firstFire: boolean = true;//to ignore first time, the reason behind that is the initialization of the variable will cause this
    this.sharedService.loaderFlag$.subscribe(flag => {
      if (!firstFire) {
        const globalFlag = !!flag;
        globalFlag ? _this.enableLoader() : _this.disableLoader();
      } else {
        firstFire = false;
      }
    });
  }

}
