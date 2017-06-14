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

const homeRoutes: Routes = [
  { path: 'home',         component: HomepageComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'projects',     component: ProjectsComponent }
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
    ProjectComponent
  ],
  providers: [ ProjectsService ]
})
export class HomeModule { }
