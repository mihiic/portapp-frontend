import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PersonalInformation } from '../../resources/personalInformation';
import { User } from '../../resources/user';
import { WorkExperience } from '../../resources/workExperience';
import { RouteAnimation } from '../../resources/animations';
import { Education } from 'app/resources/education';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: [ RouteAnimation ]
})
export class CvComponent implements OnInit {
  public personalInformation: PersonalInformation;
  public user: User;
  public workExperience: WorkExperience[];
  public education: Education[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      user => this.user = user
    );

    this.userService.getPersonalInformation().subscribe(
      personalInformation => this.personalInformation = personalInformation
    );

    this.userService.getWorkExperience().subscribe(
      workExperience => this.workExperience = workExperience
    );

    this.userService.getEducation().subscribe(
      education => this.education = education
    );
  }
}
