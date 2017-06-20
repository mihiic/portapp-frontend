import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProjectComponent } from './projects/project/project.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { ProjectsService } from '../services/projects.service';
import { ProjectLinkComponent } from './projects/project/project-link/project-link.component';
import { SocialIconService } from '../app-common/social-icon.service';
import { CvComponent } from './cv/cv.component';
import { PersonalInformationComponent } from './cv/personal-information/personal-information.component';
import { UserService } from '../services/user.service';
import { WorkExperienceComponent } from './cv/work-experience/work-experience.component';
import { EducationComponent } from './cv/education/education.component';
import { PersonalSkillsComponent } from './cv/personal-skills/personal-skills.component';
import { LanguageComponent } from './cv/personal-skills/language/language.component';
import { TechnicalSkillComponent } from './cv/technical-skills/technical-skill.component';
import { OtherSkillComponent } from './cv/other-skill/other-skill.component';

const homeRoutes: Routes = [
  { path: 'home',         component: HomepageComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'projects',     component: ProjectsComponent },
  { path: 'cv',           component: CvComponent }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(homeRoutes),
    AppCommonModule
  ],
  declarations: [
    HomepageComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectComponent,
    ProjectLinkComponent,
    CvComponent,
    PersonalInformationComponent,
    WorkExperienceComponent,
    EducationComponent,
    PersonalSkillsComponent,
    LanguageComponent,
    TechnicalSkillComponent,
    OtherSkillComponent
  ],
  providers: [ ProjectsService, SocialIconService, UserService ]
})
export class HomeModule { }
