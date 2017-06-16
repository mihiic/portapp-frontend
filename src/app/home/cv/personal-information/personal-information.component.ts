import { Component, Input, OnInit } from '@angular/core';
import { PersonalInformation } from '../../../resources/personalInformation';
import { User } from '../../../resources/user';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  @Input() personalInformation: PersonalInformation;
  @Input() user: User;

  public options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  }
}
