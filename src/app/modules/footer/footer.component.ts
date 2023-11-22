import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GUID } from 'src/app/const/guid';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lang: string = 'en';
  @Input() pageType: string = "";
  cYear: number = (new Date()).getFullYear();

  socialLinks: any = [
    {
      icon: "assets/svgs/linkedin.svg",
      href: 'https://www.linkedin.com'
    },
    {
      icon: "assets/svgs/instagram.svg",
      href: 'https://www.instagram.com'
    },
    {
      icon: "assets/svgs/twitter-x-logo.svg",
      href: 'https://twitter.com'
    },
    {
      icon: "assets/svgs/facebook.svg",
      href: 'https://www.facebook.com'
    }
  ];
  bottomMenu: any = {
    fahes: {
      en: [],
      ar: []
    },
    woqod: {
      en: [],
      ar: []
    }
  };
  topMenu: any = {
    fahes: {
      en: [],
      ar: []
    },
    woqod: {
      en: [],
      ar: []
    }
  };
  constructor(
    private multimediaService: MultimediaService,
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if (this.pageType) this.getData();
    });
  }

  getData() {
    const isCurrentTopMenu = this.topMenu?.[this.pageType]?.[this.lang];
    const isCurrentbottomMenu = this.bottomMenu?.[this.pageType]?.[this.lang];
    if (
      (!isCurrentTopMenu || isCurrentTopMenu.length === 0) ||
      (!isCurrentbottomMenu || isCurrentbottomMenu.length === 0)
    ) {
      this.getFooter();
      this.getFooterBottom();
    }
  }

  scrollTop(event: any) {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  getFooterBottom(): void {
    this.multimediaService.getFooterBottom({}, this.lang).subscribe(
      (response) => {
        const list = response?.jsonBottomTreeItems ? JSON.parse(response?.jsonBottomTreeItems) : [];
        if (list.length === 0) return;
        // console.log(list);

        this.bottomMenu[this.pageType][this.lang] = list.map((item: any) => {
          return {
            title: {
              en: item.titleEN,
              ar: item.titleAR
            },
            link: item.URL,
            target: item.Target
          }
        });
      }
    );
  }

  getFooter(): void {
    this.multimediaService.getFooter({}, this.lang).subscribe(
      (response) => {
        const footerStr = response?.jsonTreeItems;
        if (!footerStr) return;
        const footerFull = JSON.parse(footerStr);

        if (!footerFull) return;
        const root = footerFull && footerFull.length > 0 ? footerFull[0] : null;
        if (!root) return;
        const footer = root && root.children ? root.children : null;
        if (!footer) return;

        // console.log(footer);

        let temp = [];
        for (let index = 0; index < footer.length; index++) {
          if (footer[index].data.IsSectionVisible === 'True') {
            temp.push({
              title: footer[index].text || '',
              link: footer[index].data.URL || '',
              target: footer[index].data.Target,
              list: [[this.handleInnerItems(footer[index].children || [])]]
            });
          } else {
            // 
          }
        }

        this.topMenu[this.pageType][this.lang] = this.groupArrayItems(temp);
      }
    );
  }

  handleInnerItems(childrens: any) {
    return (childrens || []).filter((item: any) => item.data.IsSectionVisible === 'True').map((item: any) => {
      return {
        title: item.text || '',
        link: item.data.URL || '',
        target: item.data.Target,
      }
    });

  }

  groupArrayItems(array: any) {
    const result = [];
    for (let i = 0; i < array.length; i += 3) {
      result.push(array.slice(i, i + 3));
    }
    return result;
  }

  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }

}
