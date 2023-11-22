import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CMS_END_POINTS } from '../const/api';

@Pipe({
  name: 'videoSource'
})
export class VideoSourcePipe implements PipeTransform {

  transform(videoFile: string): string {
    return videoFile ? environment.baseURL + CMS_END_POINTS.GET_VIDEO_BY_FILE + "?id=" + videoFile : 'https://www.w3schools.com/html/mov_bbb.mp4';
  }

}
