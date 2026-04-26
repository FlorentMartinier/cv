import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CV } from '../../models/cv.model';

@Component({
  selector: 'app-education',
  imports: [NgForOf, NgIf],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  @Input() cv!: CV;
}
