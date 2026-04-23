import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [NgForOf],
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  @Input() projects: any[] = [];
}
