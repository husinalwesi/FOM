import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss']
})
export class ProfileImgComponent {
  viewImageModalEnabled: boolean = false;
  cropModalEnabled: boolean = false;
  // @ViewChild('fileUploaderContainer') fileUploaderContainer!: any;

  enableCropModal() {
    const ele: any = document.querySelector("#fileUploader");
    // this.isModalEnabled = true;
    // console.log(this.fileUploaderContainer);
    if (!ele) return;
    ele.click();
    // this.fileUploaderContainer.nativeElement.click();
  }

}
