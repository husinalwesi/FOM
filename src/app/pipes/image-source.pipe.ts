import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CMS_END_POINTS } from '../const/api';

@Pipe({
  name: 'imageSource'
})
export class ImageSourcePipe implements PipeTransform {

  transform(imageFile: string = ''): string {
    if (!imageFile) return '';

    if (imageFile.startsWith('assets/images/')) return imageFile;

    // Check if the route is an external URL
    if (
      imageFile.startsWith('//') ||
      imageFile.startsWith('http://') ||
      imageFile.startsWith('https://') ||
      imageFile.startsWith('www.')
    ) {
      return imageFile;
    } else if (imageFile === 'loadingImage') {
      return 'assets/images/default-img.gif'
    } else if (imageFile === 'errorImage') {
      return 'assets/images/error-default.webp'
    } else {
      return imageFile ? environment.baseURL + CMS_END_POINTS.GET_IMAGE_BY_FILE + "?id=" + imageFile : 'assets/images/default-img.webp';
    }
  }

}
