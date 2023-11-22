import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderImgService {

  constructor() { }

  generatePlaceholderImage(width: number = 0, height: number = 0, backgroundColorHexa: string = "012C35", forgroundColorHexa: string = "eeeeee") {
    if (width == 0) width = 300;
    if (height == 0) height = 300;    
    return `https://placehold.co/${width}x${height}/${backgroundColorHexa}/${forgroundColorHexa}.webp`;
  }

}
