import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ManifestLoader {
    constructor(@Inject(DOCUMENT) private document: Document) { }

    loadManifest() {
        return new Promise<void>((resolve) => {
            if (environment.pwaEnabled && typeof window !== 'undefined') {
                const isManifestExist = this.document.head.querySelector(`link[rel="manifest"]`);
                if (!isManifestExist) {
                    const linkElement = this.document.createElement('link');
                    linkElement.rel = 'manifest';
                    linkElement.href = 'manifest.webmanifest';
                    this.document.head.appendChild(linkElement);
                }
            }
            resolve();
        });
    }
}
