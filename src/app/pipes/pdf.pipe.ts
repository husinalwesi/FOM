import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CMS_END_POINTS } from '../const/api';

@Pipe({
  name: 'pdf'
})
export class PdfPipe implements PipeTransform {

  transform(file: string): string {
    if (!file) return '';
    return environment.baseURL + CMS_END_POINTS.GET_PDF + "?id=" + file;
  }

}
