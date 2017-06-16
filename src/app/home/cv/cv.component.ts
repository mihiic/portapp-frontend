import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PersonalInformation } from '../../resources/personalInformation';
import { User } from '../../resources/user';
import { WorkExperience } from '../../resources/workExperience';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  public personalInformation: PersonalInformation;
  public user: User;
  public workExperience: WorkExperience[];

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
    )
  }
}
