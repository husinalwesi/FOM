import { Pipe, PipeTransform } from '@angular/core';
import { CMS_END_POINTS } from 'src/app/const/api';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'facebook'
})
export class FacebookPipe implements PipeTransform {

  transform(link: string, metaData: any): string {
    if (typeof window !== 'undefined') {
      // get the data dynamicly across all pages
      const title = document.title || '';
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const img = document.querySelector('meta[name="og:image"]')?.getAttribute('content') || '';
      // 
      let lang = "en";
      const shareLink = `${environment.socialShareBaseURL}/${lang}/${link}`;
      // const img = environment.baseURL + CMS_END_POINTS.GET_IMAGE_BY_FILE + "?id=" + metaData?.data?.img;
      return encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}&picture=${img}&t=${title}&q=${description}`);

    }
    return ''
  }

}
