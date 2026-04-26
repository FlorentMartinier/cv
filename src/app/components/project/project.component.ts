import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CV } from '../../models/cv.model';

@Component({
  selector: 'app-project',
  imports: [NgForOf, NgIf],
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  @Input() cv!: CV;
}
