import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";

@Component({
  selector: 'app-attachment-third-style',
  templateUrl: './attachment-third-style.component.html',
  styleUrls: ['./attachment-third-style.component.scss']
})
export class AttachmentThirdStyleComponent {
 // @Input() data: any;
 fileName: string = "";
 @Input() data: any;
 @Input() isErrorEnabled: boolean = false;
 @Input() isFormEnabled: boolean = false;
 @Input() onlyCreateFile: boolean = false;
 @Input() accept: any = ["image/jpg", "image/jpeg", "image/png"];
 @Input() isImage: boolean = true;
 @ViewChild('Uploader') Uploader!: ElementRef;
 maximumFileUpload: number = 20;
 @Output() selectFileEmiter: EventEmitter<any> = new EventEmitter();
 imageUrl: any;
 constructor(private cdk: ChangeDetectorRef) { }

 ngOnInit(): void {
 }

 async selectFile(event: any) {
   if (!event.target.files || !event.target.files[0] || event.target.files[0].length == 0) return;
   let temp_file_size_mb = ~~(event.target.files[0].size / 1024 / 1024);
   if (temp_file_size_mb > this.maximumFileUpload) {
     alert(`Maximum upload file size: ${this.maximumFileUpload} MB.`);
     return false;
   }
   // 
   let file = event.target.files[0];
   let fileType = file.type;
   // console.log(fileType);

   if (this.accept.includes(fileType)) {
     if (fileType == "image/jpeg") fileType = "image/jpg";
     else if (fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") fileType = "application/msword";
     this.onFileSelected(event.target.files[0]);
     this.selectFileEmiter.emit(file);


   } else {
     alert(`sorry, this file type is not allowed to be uploaded.`);
     return false;
   }

   return;
 }

 onFileSelected(file: any) {
   if (file) {
     const reader = new FileReader();
     reader.onload = (e) => {
       this.imageUrl = e?.target?.result;
     };
     reader.readAsDataURL(file);
   }
 }


 uploadFile(mime: any, fileBase64: any, fileName: any) {
   // this.apiService.uploadFile(mime, fileBase64).subscribe(
   //   (success) => {
   //     let url = `${this.apiService.getBaseURL()}${success.uri[0].url}`;
   //     if (this.onlyCreateFile) {
   //       this.selectFileEmiter.emit({
   //         file: success.fid[0].value,
   //         name: fileName
   //       });
   //       this.data.url = url;
   //       this.Uploader.nativeElement.value = null;
   //       this.spinner.hide();
   //     } else {
   //       this.createMedia(success.fid[0].value, success.filename[0].value, mime, url);
   //     }
   //   }, (error) => {
   //     this.alert.error({ title: error.error.message });
   //     this.spinner.hide();
   //   });
 }

 createMedia(fileID: any, fileName: any, mime: any, url: any) {
   // this.apiService.createMedia(fileID, fileName, mime).subscribe(
   //   (success) => {
   //     if (mime == "image/png" || mime == "image/jpg" || mime == "image/jpeg") {
   //       this.selectFileEmiter.emit({ file: success.mid[0].value });
   //       this.data.url = success.field_media_image[0].value;
   //     } else if (mime == "video/mp4" || mime == "video/quicktime") {
   //       this.selectFileEmiter.emit({ file: success.mid[0].value });
   //       this.data.url = success.field_media_video_file[0].value;
   //     } else if (mime == "application/pdf" || mime == "application/msword") {
   //       this.selectFileEmiter.emit({ file: success.mid[0].value });
   //       this.data.url = success.field_media_document[0].value;
   //     }
   //     this.Uploader.nativeElement.value = null;
   //     this.spinner.hide();
   //   }, (error) => {
   //     this.alert.error({ title: error.error.message });
   //     this.spinner.hide();
   //   });
 }

 convertToBase64(file: any) {
   return new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
   });
 }

 readURL(input: any) {
   let _this = this;
   var reader = new FileReader();
   reader.onload = function (e) {
     // _this.data.url = e.target.result;
     _this.cdk.detectChanges();
   };
   reader.readAsDataURL(input);
 }

 getAcceptedFormats() {
   return this.accept.join(", ");
 }

 onButtonClick() {
   this.Uploader.nativeElement.click();
 }

}
