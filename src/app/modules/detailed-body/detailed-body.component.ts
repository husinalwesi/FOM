import { Component, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-detailed-body',
  templateUrl: './detailed-body.component.html',
  styleUrls: ['./detailed-body.component.scss']
})
export class DetailedBodyComponent {
  @Input() data: any;
  @Input() fullWIdth: boolean = false;
  content: any;

  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private el: ElementRef,
    private LoadAssetsService: LoadAssetsService
  ) { }

  handleTableResponsive() {
    const tables = this.el.nativeElement.querySelectorAll('table');
    for (let index = 0; index < tables.length; index++) {
      const tableResponsive = `<div class='responsive-table'>${tables[index]?.outerHTML || ''}</div>`;
      tables[index].outerHTML = tableResponsive;
    }
  }

  ngOnInit(): void {
    this.handleDynamicBody(this.data);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.firstChange) return;
    this.handleDynamicBody(changes.data.currentValue);
  }

  handleDynamicBody(body: string = '') {
    this.content = body ? this.sanitizer.bypassSecurityTrustHtml(this.parseScripts(body)) : '';
    setTimeout(() => {
      this.handleTableResponsive();
    });
  }

  parseScripts(html: string) {
    const decodedHtml = this.decodeHTMLEntities(html);
    this.extractScriptTagsAndImport(decodedHtml);
    return this.getHtmlTextWithoutScript(decodedHtml);
  }

  getHtmlTextWithoutScript(content: string) {
    const scriptTagRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/g;

    // Extract and remove script tags from the HTML content
    return content.replace(scriptTagRegex, '');

  }

  extractScriptTagsAndImport(htmlText: string) {
    const scriptTagsRegex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
    const scriptTags = htmlText.match(scriptTagsRegex) || [];

    for (let index = 0; index < scriptTags.length; index++) {
      // Create a temporary HTML element to parse the tag
      const tempElement = this.renderer.createElement('div');
      tempElement.innerHTML = scriptTags[index];

      // Find the script element within the temporary element
      const scriptElement = tempElement.querySelector('script');

      // Check if a script element was found and if it has a src attribute
      if (scriptElement && scriptElement.hasAttribute('src')) {
        const src: string = scriptElement.getAttribute('src') || '';
        if (src) this.LoadAssetsService.loadJS(src, 'xxx');
      }
    }
  }






  decodeHTMLEntities(encodedString: string) {
    const textarea = this.renderer.createElement('textarea');
    textarea.innerHTML = encodedString;
    return textarea.value;
  }


}
