import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './title/title.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProjectComponent } from './projects/project/project.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppCommonModule } from '../app-common/app-common.module';

const homeRoutes: Routes = [
  { path: 'home',        component: HomepageComponent },
  { path: 'project/:id', component: ProjectComponent }
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
    TitleComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectComponent,
    NavigationComponent
  ]
})
export class HomeModule { }
