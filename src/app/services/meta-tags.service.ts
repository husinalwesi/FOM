import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { CMS_END_POINTS } from '../const/api';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {
  defalutData: any = {
    title: "WOQOD | The official Web site of the WOQOD",
    description: "The official Web site of the WOQOD",
    keywords: ["WOQOD", "WOQOD", "WOQOD"]
  };
  private renderer: Renderer2;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private rendererFactory: RendererFactory2,
    private location: Location,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  updateMetaTags(metaData: any = null) {
    const baseURL: string = environment.socialShareBaseURL;
    const fullPath = this.location.path() || "";
    const fullURL: string = `${baseURL}${fullPath}`;
    // 
    this.updateTitle(metaData?.title || this.defalutData.title);
    this.updateDescription(metaData?.description || this.defalutData.description);
    this.updateKeywords(metaData?.keywords || this.defalutData.keywords);
    this.createLink('canonical', fullURL);
    this.createLink('alternate', fullURL);
    this.updateImage(metaData?.img, metaData?.title || this.defalutData.title);
    this.updateMainLink(fullURL);
  }

  updateMainLink(link: any): void {
    this.metaService.updateTag({ name: 'og:url', content: link });
    this.metaService.updateTag({ name: 'twitter:url', content: link });

    this.metaService.updateTag({ name: 'twitter:site', content: 'QatarFuel_Woqod' });
    this.metaService.updateTag({ name: 'twitter:creator', content: 'QatarFuel_Woqod' });
  }

  updateKeywords(keywords: any): void {
    this.metaService.updateTag({ name: 'keywords', content: keywords.toString() });
  }

  updateTitle(title: string): void {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'title', content: title });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ name: 'twitter:title', content: title });

  }

  updateDescription(description: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
  }

  updateImage(img: string, title: string): void {
    const defaultImage = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    const image = img ? this.imageSourcePipe(img) : defaultImage;
    // 
    this.metaService.updateTag({ name: 'og:image', content: image });
    this.metaService.updateTag({ name: 'twitter:image:alt', content: title });
    this.metaService.updateTag({ name: 'og:image:url', content: image });
    this.metaService.updateTag({ name: 'og:image:alt', content: title });

    this.metaService.updateTag({ name: 'twitter:image:width', content: '1600' });
    this.metaService.updateTag({ name: 'twitter:image:height', content: '900' });

    this.metaService.updateTag({ name: 'og:image:width', content: '1200' });
    this.metaService.updateTag({ name: 'og:image:height', content: '630' });
  }

  imageSourcePipe(imageFile: string = ''): string {
    if (!imageFile) return '';
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
      return 'assets/images/error-default.jpeg'
    } else {
      return imageFile ? environment.baseURL + CMS_END_POINTS.GET_IMAGE_BY_FILE + "?id=" + imageFile : 'assets/images/default-img.webp';
    }
  }

  createLink(rel: string, url: string): void {
    if (typeof window !== 'undefined') {
      const existingLink = this.document.head.querySelector(`link[rel="${rel}"]`);
      if (existingLink) {
        this.renderer.setAttribute(existingLink, 'href', url);
      } else {
        const linkElement = this.renderer.createElement('link');
        this.renderer.setAttribute(linkElement, 'rel', rel);
        this.renderer.setAttribute(linkElement, 'href', url);
        this.renderer.appendChild(this.document.head, linkElement);
      }
    }
  }

}
