import { Component, Input } from '@angular/core';
import { ImageCropperComponent, ImageCroppedEvent, LoadedImage, ImageTransform } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';
import { MIME } from 'src/app/const/mime';

@Component({
  selector: 'app-crop-img',
  templateUrl: './crop-img.component.html',
  styleUrls: ['./crop-img.component.scss']
})
export class CropImgComponent {
  @Input() isModalEnabled: boolean = false;

  accept: any = ["jpg", "png"];
  acceptTemp: any = {
    data: [],
    str: ''
  };
  maximumFileUpload: number = 20;
  // https://stackblitz.com/edit/image-cropper?file=src%2Fapp.component.html
  scale = 1;
  transform: ImageTransform = {
    translateUnit: 'px'
  };


  imageChangedEvent: Event | null = null;
  croppedImage: SafeUrl = '';


  constructor(
    private sanitizer: DomSanitizer,

    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService,
    private resizeService: ResizeService,
    private cdk: ChangeDetectorRef,
    private SharedService: SharedService
  ) { }

  fileChangeEvent(event: any): void {
    if (!event.target.files || !event.target.files[0] || event.target.files[0].length == 0) return;
    let temp_file_size_mb = ~~(event.target.files[0].size / 1024 / 1024);
    if (temp_file_size_mb > this.maximumFileUpload) {
      alert(`Maximum upload file size: ${this.maximumFileUpload} MB.`);
      return;
    }
    // 
    let file = event.target.files[0];
    let fileType = file.type;
    // this.fileName = file.name;
    if (this.acceptTemp.data.includes(fileType)) {
      this.imageChangedEvent = event;
    } else {
      alert(`sorry, this file type is not allowed to be uploaded.`);
    }
  }
  imageCropped(event: any) {
    // ImageCroppedEvent
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
    // event.blob can be used to upload the cropped image
  }
  imageLoaded(image: LoadedImage) {
    // console.log('imageLoaded');
    this.isModalEnabled = true;
    // show cropper
  }
  cropperReady() {
    // console.log('cropperReady');

    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  rangeInput(val: number) {
    this.scale = val;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }


  ngOnInit(): void {
    this.getAcceptedFormats();
  }

  getAcceptedFormats() {
    let temp = [];
    for (let index = 0; index < this.accept.length; index++) {
      if (this.accept[index] === 'pdf') temp.push(MIME.file.pdf);
      else if (this.accept[index] === 'word') temp.push(MIME.file.word);//
      else if (this.accept[index] === 'jpg') temp.push(MIME.image.jpg);//
      else if (this.accept[index] === 'png') temp.push(MIME.image.png);
    }
    this.acceptTemp.data = temp.flat();
    this.acceptTemp.str = this.acceptTemp.data.join(', ');
  }
}
