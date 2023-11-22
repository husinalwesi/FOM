import { Inject, Injectable } from "@angular/core";
import { DOCUMENT, ɵgetDOM as getDOM } from "@angular/common";
import { environment } from "src/environments/environment";

/**
* Contents copied from
* https://github.com/angular/angular/blob/main/packages/platform-browser/src/dom/shared_styles_host.ts
* Provides custom DomSharedStylesHostService with own logic
*/

@Injectable() export class SharedStylesHost {
    /** @internal */
    protected _stylesSet = new Set<string>();

    addStyles(styles: string[]): void {
        const additions = new Set<string>();
        styles.forEach(style => {
            if (!this._stylesSet.has(style)) {
                this._stylesSet.add(style);
                additions.add(style);
            }
        });
        this.onStylesAdded(additions);
    }

    onStylesAdded(additions: Set<string>): void { }

    getAllStyles(): string[] {
        return Array.from(this._stylesSet);
    }
}

@Injectable()
export class CustomDomSharedStylesHostService extends SharedStylesHost {
    private _hostNodes = new Map<Node, Node[]>();

    constructor(@Inject(DOCUMENT) private _doc: any) {
        super();
        this._hostNodes.set(_doc.head, []);
    }

    private _addStylesToHost(styles: Set<string>, host: Node, styleNodes: Node[]): void {
        styles.forEach((style: string) => {
            const styleEl: HTMLStyleElement = this._doc.createElement('style');
            styleEl.textContent = style;
            if (environment.nonce.isEnabled && environment.nonce.value) styleEl.setAttribute('nonce', environment.nonce.value);
            styleNodes.push(host.appendChild(styleEl));
        });
    }

    addHost(hostNode: Node): void {
        const styleNodes: Node[] = [];
        this._addStylesToHost(this._stylesSet, hostNode, styleNodes);
        this._hostNodes.set(hostNode, styleNodes);
    }

    removeHost(hostNode: Node): void {
        const styleNodes = this._hostNodes.get(hostNode);
        if (styleNodes) {
            styleNodes.forEach(removeStyle);
        }
        this._hostNodes.delete(hostNode);
    }

    override onStylesAdded(additions: Set<string>): void {
        this._hostNodes.forEach((styleNodes, hostNode) => {
            this._addStylesToHost(additions, hostNode, styleNodes);
        });
    }

    ngOnDestroy(): void {
        this._hostNodes.forEach(styleNodes => styleNodes.forEach(removeStyle));
    }
}

function removeStyle(styleNode: Node): void {
    getDOM().remove(styleNode);
}
