import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../canonical/canonical.service';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private canonicalService: CanonicalService,
    private meta: Meta,
    private titleService: Title
  ) {}

  setMetaTags(title: string, description: string, keywords: string): void {
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.canonicalService.setCanonicalURL();
  }
}
