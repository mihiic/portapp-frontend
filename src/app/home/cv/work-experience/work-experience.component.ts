import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from '../../../resources/workExperience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperience: WorkExperience;

  public dateConfig: any;

  constructor() { }

  ngOnInit() {
    this.dateConfig = {
      year: 'numeric',
      month: 'long'
    }
  }

  public getLocaleDate(date: Date): String {
    if (date) {
      return date.toLocaleString('en-US', this.dateConfig);
    }
    return 'present'
  }
}
