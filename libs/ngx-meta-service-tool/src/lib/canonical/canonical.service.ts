import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CanonicalService {
  constructor(@Inject(DOCUMENT) private dom: Document) {}

  setCanonicalURL(): void {
    const oldlink: HTMLLinkElement = this.dom.querySelector(
      'link[rel=canonical]'
    ) as HTMLLinkElement;
    if (oldlink) {
      oldlink.remove();
    }
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
  }
}
