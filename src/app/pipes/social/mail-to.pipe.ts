import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'mailTo'
})
export class MailToPipe implements PipeTransform {

  transform(link: string, metaData: any): string {
    let lang = "en";
    const shareLink = `${environment.socialShareBaseURL}/${lang}/${link}`;
    // const title = 'title' || metaData?.data?.title[lang];
    // const description = 'description' || metaData?.data?.description[lang];
    return encodeURI(`mailto:example@mail.com?body=${shareLink}&subject=Woqod`);
  }

}
