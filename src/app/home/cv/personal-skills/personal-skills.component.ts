import { Component, Input, OnInit } from '@angular/core';
import { PersonalSkills } from '../../../resources/skills';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html',
  styleUrls: [ './personal-skills.component.css' ]
})
export class PersonalSkillsComponent implements OnInit {
  @Input() personalSkills: PersonalSkills;

  constructor() { }

  ngOnInit() {

  }

  public getLicenseCSV(): string {
    return this.personalSkills.drivingLicense.join(', ');
  }
}
