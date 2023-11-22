import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { GUID } from "src/app/const/guid";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.scss"],
})
export class HelpComponent {
  lang: string = 'en';
  data: any = [];
  tabs: any = [];
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
  ) {

    this.lang = this.TranslationService.getSelectedLanguage()
    this.metaTagsService.updateMetaTags({
      title: "Help Center | Woqod",
      description: "Help Center | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
    this.getData();
  }

  getData() {
    this.multimediaService.getWoqodHelpAreas({}).subscribe((response) => {


      const callCenterOffline = (response || []).find((item: any) => item.woqodHelpAreaID === GUID.woqod.help.callCenterOffline) || false;
      const instagram = (response || []).find((item: any) => item.woqodHelpAreaID === GUID.woqod.help.instagram) || false;
      const whatsApp = (response || []).find((item: any) => item.woqodHelpAreaID === GUID.woqod.help.whatsApp) || false;
      const needHelp = (response || []).find((item: any) => item.woqodHelpAreaID === GUID.woqod.help.needHelp) || false;
      let tabsTemp = [];

      if (callCenterOffline) tabsTemp.push({
        title: {
          en: callCenterOffline.titleEN,
          ar: callCenterOffline.titleAR
        },
        svg: callCenterOffline.iconID,
        action: callCenterOffline.url
      });

      if (instagram) tabsTemp.push({
        title: {
          en: instagram.titleEN,
          ar: instagram.titleAR
        },
        svg: instagram.iconID,
        action: instagram.url
      });

      if (whatsApp) tabsTemp.push({
        title: {
          en: whatsApp.titleEN,
          ar: whatsApp.titleAR
        },
        svg: whatsApp.iconID,
        action: whatsApp.url
      });

      if (needHelp) tabsTemp.push({
        title: {
          en: needHelp.titleEN,
          ar: needHelp.titleAR
        },
        svg: needHelp.iconID,
        action: needHelp.url
      });

      this.tabs = tabsTemp;



      let tempTop = [];
      if (true) tempTop.push({
        svg: "assets/svgs/Frequently_questions.svg",
        description: {
          en: "DASHBOARD.Frequently",
          ar: "DASHBOARD.Frequently",
        },
        action: '/faqs'
      });

      if (true) tempTop.push({
        svg: "assets/svgs/chat_box.svg",
        description: {
          en: "DASHBOARD.CHAT",
          ar: "DASHBOARD.CHAT",
        },
        action: null
      });

      if (callCenterOffline) tempTop.push({
        svg: callCenterOffline.iconID,
        description: {
          en: callCenterOffline.titleEN,
          ar: callCenterOffline.titleAR
        },
        action: callCenterOffline.url
      });

      this.data = tempTop;
    });
  }

  fireChat() {
    if (typeof window !== "undefined") {
      let verloopBtn: any = document.querySelector(".verloop-button");
      if (verloopBtn) verloopBtn.click();
    }

  }

}
