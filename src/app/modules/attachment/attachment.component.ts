import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MIME } from '../../const/mime';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent {
  fileName: string = "";
  @Input() data: any;
  @Input() isErrorEnabled: boolean = false;
  @Input() isFormEnabled: boolean = false;
  @Input() accept: any = [];
  @Input() acceptTemp: any = {
    data: [],
    str: ''
  };
  @ViewChild('Uploader') Uploader!: ElementRef;
  @Input() maximumFileUpload: number = 20;
  @Output() selectFileEmiter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.getAcceptedFormats();
  }

  selectFile(event: any): void {
    if (!event.target.files || !event.target.files[0] || event.target.files[0].length == 0) return;
    let temp_file_size_mb = ~~(event.target.files[0].size / 1024 / 1024);
    if (temp_file_size_mb > this.maximumFileUpload) {
      alert(`Maximum upload file size: ${this.maximumFileUpload} MB.`);
      return;
    }
    // 
    let file = event.target.files[0];
    let fileType = file.type;
    this.fileName = file.name;
    if (this.acceptTemp.data.includes(fileType)) {
      this.selectFileEmiter.emit(file);
    } else {
      alert(`sorry, this file type is not allowed to be uploaded.`);
    }
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

  onButtonClick() {
    this.Uploader.nativeElement.click();
  }

  onCancel() {
    this.fileName = '';
    this.selectFileEmiter.emit(null);
  }

}
