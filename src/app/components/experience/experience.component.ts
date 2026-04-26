import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CV } from '../../models/cv.model';

@Component({
  selector: 'app-experience',
  imports: [NgForOf, NgIf],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  @Input() cv!: CV;
}
