import { Component, Input } from '@angular/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { PlaceholderImgService } from 'src/app/services/placeholder-img.service';

@Component({
  selector: 'app-social-account-widget',
  templateUrl: './social-account-widget.component.html',
  styleUrls: ['./social-account-widget.component.scss']
})
export class SocialAccountWidgetComponent {
  @Input() customBorder: any = ['rounded-[5px]', 'rounded-[5px]'];
  @Input() socilaMediaAccounts: any = [];


  image: string = 'assets/images/social.webp';

  constructor(
    private placeholderImgService: PlaceholderImgService,
    private multimediaService: MultimediaService,
  ) { }

  ngOnInit(): void {
    if (this.socilaMediaAccounts && this.socilaMediaAccounts.length === 0) this.getSocialLinks();
  }

  getSocialLinks() {
    this.multimediaService.getSocialLinks().subscribe((response) => {
      this.socilaMediaAccounts = (response || []).map((item: any) => {
        return {
          image: item.iconID,
          title: item.titleEN,
          // svg: 'assets/svgs/linkedin-2.svg',
          link: item.url
        }
      });
    });
  }

}
