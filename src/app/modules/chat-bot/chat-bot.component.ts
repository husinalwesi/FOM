import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {
  constructor(private renderer: Renderer2, private el: ElementRef, private LoadAssetsService: LoadAssetsService) { }

  ngOnInit() {
    this.loadChat();
  }

  loadChat() {
    if (this.LoadAssetsService.isJsAlreadyAdded('assets/js/livechat-script.js')) return;
    // if (this.LoadAssetsService.isJsAlreadyAdded('https://woqod.mena.verloop.io/livechat/script.min.js')) return;
    // Create a script element
    const script = this.renderer.createElement('script');

    // Set the script type attribute
    this.renderer.setAttribute(script, 'type', 'text/javascript');

    // Add the Verloop script content
    script.text = `
      (function(w, d, s, u) {
        w.Verloop = function(c) { w.Verloop._.push(c) }; w.Verloop._ = []; w.Verloop.url = u;
        var h = d.getElementsByTagName(s)[0], j = d.createElement(s); j.async = true;
        j.src = 'assets/js/livechat-script.js';
        h.parentNode.insertBefore(j, h);
      })(window, document, 'script', 'https://woqod.mena.verloop.io/livechat');
    `;
    // script.text = `
    //   (function(w, d, s, u) {
    //     w.Verloop = function(c) { w.Verloop._.push(c) }; w.Verloop._ = []; w.Verloop.url = u;
    //     var h = d.getElementsByTagName(s)[0], j = d.createElement(s); j.async = true;
    //     j.src = 'https://woqod.mena.verloop.io/livechat/script.min.js';
    //     h.parentNode.insertBefore(j, h);
    //   })(window, document, 'script', 'https://woqod.mena.verloop.io/livechat');
    // `;

    // Append the script to the component's native element or any other target element
    this.renderer.appendChild(this.el.nativeElement, script);
  }

}
