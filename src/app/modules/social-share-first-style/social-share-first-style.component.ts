import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-social-share-first-style',
  templateUrl: './social-share-first-style.component.html',
  styleUrls: ['./social-share-first-style.component.scss']
})
export class SocialShareFirstStyleComponent {
  @Input() metaData: any;
  link: string = '';

  constructor(private location: Location) { }

  ngOnInit(): void {
    let path = this.location.path();
    let pathArr = path.split("/");
    this.link = pathArr && pathArr.length > 2 ? pathArr.slice(2).join('/') : '';
  }

}
