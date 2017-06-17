import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../../resources/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() education: Education;

  public dateOptions: any;

  constructor() { }

  ngOnInit() {
    this.dateOptions = {
      month: 'long',
      year: 'numeric'
    }
  }

  public getLocaleDate(date: Date): String {
    if (date) {
      return date.toLocaleString('en-US', this.dateOptions);
    }
    return 'ongoing'
  }
}
