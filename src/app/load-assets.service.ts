import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadAssetsService {
  private renderer: Renderer2;
  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  loadCss(url: string, id: string) {
    if (this.isCssAlreadyAdded(url)) return;
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.id = id;
    this.renderer.appendChild(this.document.head, link);
  }

  private isCssAlreadyAdded(url: string): boolean {
    const existingLinks: any = this.document.querySelectorAll('link[rel="stylesheet"]');
    for (const link of existingLinks) {
      if (link.href === url) return true;
    }
    return false;
  }

  loadJS(url: string, id: string) {
    if (this.isJsAlreadyAdded(url)) return;
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = id;
    this.renderer.appendChild(this.document.head, script);
  }

  isJsAlreadyAdded(url: string): boolean {
    const existingScripts: any = this.document.querySelectorAll('script');

    for (let index = 0; index < existingScripts.length; index++) {
      if (existingScripts[index].src === url) return true;
    }

    return false;
  }



  // only this is waiting
  loadJSP(url: any, id: any, type: string = 'text/javascript', callback: any, async: boolean = false, charset: string = '', defer: boolean = false) {

    if (this.isJsAlreadyAdded(url)) return;
    const script = this.renderer.createElement('script');
    script.type = type;
    script.src = url;
    script.id = id;
    if (async) script.async = true;
    if (defer) script.defer = true;
    if (charset) script.charset = charset;

    script.onload = function () {
      if (typeof callback === 'function') {
        callback(); // Execute the callback function once the script is loaded
      }
    };

    this.renderer.appendChild(this.document.head, script);
  }


}
