import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from '../services/platform.service';

export interface Locale {
  lang: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})

export class TranslationService {
  // Private properties
  private langIds: any = [];

  constructor(
    private translate: TranslateService,
    private router: Router,
    private meta: Meta,
    private location: Location,
    @Inject(DOCUMENT) private document: Document,
    public platformService: PlatformService
  ) {
    // add new langIds to the list
    this.translate.addLangs([environment.languages.default]);

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(environment.languages.default);
  }

  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);

      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
  }

  setLanguage(lang: string) {
    if (lang) {
      this.translate.use(lang);
      if (this.platformService.isClient()) localStorage.setItem(environment.languages.saveKey, lang);

      const currentUrl = this.location.path();

      let splittedURL = currentUrl.split("/");
      if (splittedURL?.[0] === '') splittedURL.shift();
      if (splittedURL?.[0] === 'en' || splittedURL?.[0] === 'ar') splittedURL.shift();
      // console.log(currentUrl, splittedURL);



      const languageSegment = splittedURL.join("/");



      // const languageSegment = currentUrl.split('/')[1]; // Extract the current language segment from the URL
      // console.log(languageSegment);

      if (languageSegment) {
        // console.log(1);
        // console.log("21");

        // console.log(lang);

        // console.log(languageSegment);

        if (languageSegment === 'en' || languageSegment === 'ar') {
          // console.log(1);
          const updatedUrl = currentUrl.replace(`/${languageSegment}`, `/${lang}`); // Replace the language segment with the new language
          this.router.navigateByUrl(updatedUrl);
        } else {
          // console.log(lang, languageSegment);

          this.router.navigateByUrl(`/${lang}/${languageSegment}`);
        }

        // if (languageSegment !== lang) {
        //   console.log(1, languageSegment);

        //   const updatedUrl = currentUrl.replace(`/${languageSegment}`, `/${lang}`); // Replace the language segment with the new language
        //   this.router.navigateByUrl(updatedUrl);
        // } else {
        //   console.log(2, languageSegment);

        //   this.router.navigateByUrl(`/en/${languageSegment}`);
        // }

      } else {
        // console.log(`/${lang}${currentUrl === "/" ? "" : currentUrl}`);


        this.router.navigateByUrl(`/${lang}${currentUrl === "/" ? "" : currentUrl === '/en' || currentUrl === '/ar' ? '' : currentUrl}`);
      }

      this.setHtmlDirection(lang);
    }
  }

  setHtmlDirection(lang: string) {
    if (typeof window !== "undefined") {
      this.document.documentElement.lang = lang;
      this.document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      this.document.documentElement.classList.add(lang === "ar" ? "rtl" : "ltr");
      this.document.documentElement.classList.remove(lang !== "ar" ? "rtl" : "ltr");

      this.meta.updateTag({ property: 'og:locale', content: `${lang}_${lang === "ar" ? "rtl" : "ltr"}` }, 'property="og:locale"');
      this.meta.updateTag({ property: 'og:locale:alternate', content: lang === "ar" ? "en_ltr" : "ar_rtl" }, 'property="og:locale:alternate"');
    }
  }

  /**
   * Returns selected language
   */
  getSelectedLanguage(): any {
    const langs = this.translate.getLangs() || [];
    const path = this.location.path() || '';
    const urlLang = langs.find(lang => path === `/${lang}` || path.startsWith(`/${lang}/`));
    const localStorageValue = this.platformService.isServer ? "" : localStorage.getItem(environment.languages.saveKey);
    return (
      urlLang ||
      localStorageValue ||
      this.translate.getDefaultLang()
    );
  }

  isRTL() {
    return this.getSelectedLanguage() === "ar";
  }

}
