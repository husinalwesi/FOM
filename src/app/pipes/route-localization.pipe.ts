import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../i18n/translation.service';

@Pipe({
  name: 'routeLocalization'
})
export class RouteLocalizationPipe implements PipeTransform {

  constructor(
    private translationService: TranslationService
  ) {

  }

  transform(route: string): string {
    if (route === '#') return '#';
    // const xxxx = route === 'https://www.google.com';
    const currentLang = this.translationService.getSelectedLanguage();
    if (!route) return `/${currentLang}`;
    // Check if the route is an external URL
    if (
      route.startsWith('//') ||
      route.startsWith('http://') ||
      route.startsWith('https://') ||
      route.startsWith('www.')
    ) {
      const protocol = 'https:';
      let prefix = '';
      if (route.startsWith('www.')) prefix = `${protocol}//`;
      else if (route.startsWith('//')) prefix = protocol;

      // if (xxxx) console.log((prefix === '' ? '' : prefix) + route.toLowerCase());

      // 
      return (prefix === '' ? '' : prefix) + route.toLowerCase(); // Return the external URL as is
    } else {
      if (route.startsWith('en/') || route.startsWith('/en/') || route.startsWith('ar/') || route.startsWith('ar/')) {

        if (route.startsWith('/en/')) return `/${currentLang}/${route.replace("/en/", "")}`;
        else if (route.startsWith('/ar/')) return `/${currentLang}/${route.replace("/ar/", "")}`;
        else if (route.startsWith('en/')) return `/${currentLang}/${route.replace("en/", "")}`;
        else if (route.startsWith('ar/')) return `/${currentLang}/${route.replace("ar/", "")}`;
      }
      // Apply localization to internal routes
      return `/${currentLang}${route.startsWith('/') ? route.toLowerCase() : `/${route.toLowerCase()}`}`;
    }

  }

}
