import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

import { ImageCropperComponent, ImageCroppedEvent, LoadedImage, ImageTransform } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { MIME } from 'src/app/const/mime';

@Component({
  selector: 'app-provider-detailed',
  templateUrl: './provider-detailed.component.html',
  styleUrls: ['./provider-detailed.component.scss'],

  // imports: [ImageCropperComponent]
})
export class ProviderDetailedComponent {
  starFill: number = 4;
  itemSelected: number = 1;
  list: any = [
    { title: 'Home', key: 'home', svg: 'verify' },
    { title: 'Manage your profile info', key: 'profile_info', svg: 'verify' },
    { title: 'Password and security', key: 'password_security', svg: 'verify' },
    { title: 'Personal details', key: 'personal_details', svg: 'verify' },
    { title: 'Notifications', key: 'notifications', svg: 'verify' },
    { title: 'Statistics', key: 'statistics', svg: 'verify' },
    { title: 'Upgrade your account', key: 'upgrade_account', svg: 'verify' },
    { title: 'Sign out', key: 'sign_out', svg: 'verify' },
  ];
  settingPage: boolean = false;
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
  @ViewChild('fileUploader') fileUploader!: any;


  imageChangedEvent: Event | null = null;
  croppedImage: SafeUrl = '';

  enableCropModal() {
    // this.cropModalEnabled = true;
    this.fileUploader.nativeElement.click();
  }

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
    this.cropModalEnabled = true;
    // show cropper
  }
  cropperReady() {
    // console.log('cropperReady');

    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  rangeInput(event: any) {
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




  viewImageModalEnabled: boolean = false;

  cropModalEnabled: boolean = false;

  isInnerPhotoClicked: boolean = false;
  mapModalEnabled: boolean = false;
  reviewModalEnabled: boolean = false;
  writePostModalEnabled: boolean = false;
  hoursModalEnabled: boolean = false;

  isMobile: boolean = false;
  isReview: boolean = false;
  writePermission: boolean = true;
  // posts: any = [];
  posts: any = [1, 2, 1, 2, 1];
  cover: any = {
    w: 0,
    l: 0
  };

  constructor(
    private sanitizer: DomSanitizer,

    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService,
    private resizeService: ResizeService,
    private cdk: ChangeDetectorRef,
    private SharedService: SharedService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader();

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => {
      // this.calculateSize();
    });
  }

  calculateSize() {
    if (typeof window !== 'undefined') {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
      this.isMobile = screenWidth < 768;

      if (this.isMobile) return;

      const imgContainer: any = typeof window !== 'undefined' ? document.querySelector("#img-container") : null;

      const circleImgContainer: any = typeof window !== 'undefined' ? document.querySelector("#circle-img-container") : null;
      const circleImgContainerImage: any = typeof window !== 'undefined' ? document.querySelector("#circle-img-container img") : null;

      const profileContent: any = typeof window !== 'undefined' ? document.querySelector("#profile-content") : null;

      if (!imgContainer || !circleImgContainer || !circleImgContainerImage) return;
      // 
      const halfImgCircle = circleImgContainerImage.offsetWidth / 4;

      let left = profileContent.offsetLeft - (circleImgContainer.offsetLeft + circleImgContainer.offsetWidth) + halfImgCircle;
      let width = left + profileContent.offsetWidth;

      this.cover = {
        w: width,
        l: -left
      };
      console.log(this.cover);
      this.cdk.detectChanges();
    }
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

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

}
