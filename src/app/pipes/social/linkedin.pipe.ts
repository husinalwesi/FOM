import { Pipe, PipeTransform } from '@angular/core';
import { CMS_END_POINTS } from 'src/app/const/api';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'linkedin'
})
export class LinkedinPipe implements PipeTransform {

  transform(link: string, metaData: any): string {
    let lang = "en";
    const shareLink = `${environment.socialShareBaseURL}/${lang}/${link}`;
    // const img = `http%3A%2F%2Fwww.applezein.net%2Fwordpress%2Fwp-content%2Fuploads%2F2015%2F03%2Ffacebook-logo.jpg`;
    // const img = environment.baseURL + CMS_END_POINTS.GET_IMAGE_BY_FILE + "?id=" + metaData?.data?.img;
    const title = 'title' || metaData?.data?.title[lang];
    const description = 'description' || metaData?.data?.description[lang];
    return encodeURI(`https://www.linkedin.com/shareArticle?mini=true&url=${shareLink}&title=${title}&summary=${description}&source=WOQOD`);
  }

}
