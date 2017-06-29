import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PersonalInformation } from '../../resources/personalInformation';
import { User } from '../../resources/user';
import { WorkExperience } from '../../resources/workExperience';
import { RouteAnimation } from '../../resources/animations';
import { Education } from 'app/resources/education';
import { OtherSkill, PersonalSkills, TechnicalSkill } from '../../resources/skills';

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
  public technicalSkills: TechnicalSkill[];
  public education: Education[];
  public personalSkills: PersonalSkills;
  public managmentSkills: OtherSkill[];
  public organisationSkills: OtherSkill[];

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

    this.userService.getPersonalSkills().subscribe(
      personalSkills => this.personalSkills = personalSkills
    );

    this.userService.getTechnicalSkills().subscribe(
      techSkills => this.technicalSkills = techSkills
    );

    this.userService.getOrganisationSkills().subscribe(
      organisation => this.organisationSkills = organisation
    );

    this.userService.getManagmentSkills().subscribe(
      managment => this.managmentSkills = managment
    )
  }

  public hasAdditionalInfo():boolean {
    return true;
  }
}
