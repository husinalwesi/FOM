import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MIME } from '../../const/mime';

@Component({
  selector: 'app-attachment-second-style',
  templateUrl: './attachment-second-style.component.html',
  styleUrls: ['./attachment-second-style.component.scss']
})
export class AttachmentSecondStyleComponent {
  // fileName: string = "";
  // @Input() data: any;
  // @Input() isErrorEnabled: boolean = false;
  // @Input() accept: any = [];
  // @Input() acceptTemp: any = {
  //   data: [],
  //   str: ''
  // };
  // @ViewChild('Uploader') Uploader!: ElementRef;
  // @Input() maximumFileUpload: number = 20;
  // @Output() selectFileEmiter: EventEmitter<any> = new EventEmitter();

  // constructor() { }

  // ngOnInit(): void {
  //   this.getAcceptedFormats();
  // }

  // selectFile(event: any): void {
  //   if (!event.target.files || !event.target.files[0] || event.target.files[0].length == 0) return;
  //   let temp_file_size_mb = ~~(event.target.files[0].size / 1024 / 1024);
  //   if (temp_file_size_mb > this.maximumFileUpload) {
  //     alert(`Maximum upload file size: ${this.maximumFileUpload} MB.`);
  //     return;
  //   }
  //   // 
  //   let file = event.target.files[0];
  //   let fileType = file.type;
  //   this.fileName = file.name;
  //   if (this.acceptTemp.data.includes(fileType)) {
  //     this.selectFileEmiter.emit(file);
  //   } else {
  //     alert(`sorry, this file type is not allowed to be uploaded.`);
  //   }
  // }

  // getAcceptedFormats() {
  //   let temp = [];
  //   for (let index = 0; index < this.accept.length; index++) {
  //     if (this.accept[index] === 'pdf') temp.push(MIME.file.pdf);
  //     else if (this.accept[index] === 'word') temp.push(MIME.file.word);//
  //     else if (this.accept[index] === 'jpg') temp.push(MIME.image.jpg);//
  //     else if (this.accept[index] === 'png') temp.push(MIME.image.png);
  //   }
  //   this.acceptTemp.data = temp.flat();
  //   this.acceptTemp.str = this.acceptTemp.data.join(', ');
  // }

  // onButtonClick() {
  //   this.Uploader.nativeElement.click();
  // }

  // onCancel() {
  //   this.fileName = '';
  //   this.selectFileEmiter.emit(null);
  // }
  fileName: string = "";
  @Input() data: any;
  @Input() isErrorEnabled: boolean = false;
  @Input() accept: string[] = ['pdf', 'word', 'jpg', 'png', 'xls', 'xlsx', 'gif'];
  @Input() acceptTemp: any = {
    data: [],
    str: ''
  };
  @ViewChild('Uploader') Uploader!: ElementRef;
  @Input() maximumFileUpload: number = 20;
  @Input() multiple: boolean = false
  @Output() selectFileEmiter: EventEmitter<any> = new EventEmitter();
  fileNames: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAcceptedFormats();
  }

  selectFile(event: any): void {
    if (!event.target.files || event.target.files.length === 0) return;

    for (let i = 0; i < event.target.files.length; i++) { // Initialize 'i' here
      let temp_file_size_mb = ~~(event.target.files[i].size / 1024 / 1024);
      if (temp_file_size_mb > this.maximumFileUpload) {
        alert(`Maximum upload file size: ${this.maximumFileUpload} MB.`);
        return;
      }

      let file = event.target.files[i];
      let fileType = file.type;
      let fileExtension = file.name.split('.').pop().toLowerCase();

      console.log(`File type: ${fileType}, File extension: ${fileExtension}`);

      if (this.acceptTemp.data.includes(fileType) || this.acceptTemp.data.includes(fileExtension)) {
        this.fileNames.push(file.name);
        this.selectFileEmiter.emit(event.target.files);
      } else {
        alert(`Sorry, this file type is not allowed to be uploaded: ${fileType}`);
      }
    }
  }





  getAcceptedFormats() {
    let temp = [];

    for (let index = 0; index < this.accept.length; index++) {
      if (this.accept[index] === 'pdf') {
        temp.push(MIME.file.pdf);
      } else if (this.accept[index] === 'word') {
        temp.push(MIME.file.word);
      } else if (this.accept[index] === 'jpg') {
        temp.push(MIME.image.jpg);
      } else if (this.accept[index] === 'png') {
        temp.push(MIME.image.png);
      } else if (this.accept[index] === 'gif') {
        temp.push(MIME.image.gif);
      } else if (this.accept[index] === 'xls' || this.accept[index] === 'xlsx') {
        temp.push(MIME.file.excel);
      }
    }

    this.acceptTemp.data = temp.flat();
    this.acceptTemp.str = this.acceptTemp.data.join(', ');
  }



  onButtonClick() {
    this.Uploader.nativeElement.click();
  }

  onCancel(index: number) {
    this.fileNames.splice(index, 1);
    this.selectFileEmiter.emit(this.fileNames);
  }


}
