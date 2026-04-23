import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  imports: [NgForOf],
  templateUrl: './language.component.html'
})
export class LanguageComponent {
  @Input() languages: any[] = [];
}
