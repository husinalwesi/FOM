import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CMS_END_POINTS } from '../const/api';

@Pipe({
  name: 'file'
})
export class FilePipe implements PipeTransform {

  transform(file: string): string {
    if (!file) return '';
    return environment.baseURL + CMS_END_POINTS.GET_FILE + "?id=" + file;
  }

}
