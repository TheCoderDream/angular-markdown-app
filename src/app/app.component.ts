import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import marked from 'marked';

const initialMarkdown = `

Hello **how** *are* you ?

- Item 1
- Item 2
- Item 3

> we love ANGULAR`;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  markdown = initialMarkdown;

  get marked() {
    return this.sanitizer.bypassSecurityTrustHtml(marked(this.markdown));
  }

  constructor(private sanitizer: DomSanitizer) {}
}
