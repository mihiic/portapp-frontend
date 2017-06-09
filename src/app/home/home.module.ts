import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TitleComponent } from './homepage/title/title.component';
import { AboutComponent } from './homepage/about/about.component';
import { ProjectsComponent } from './homepage/projects/projects.component';

const homeRoutes: Routes = [
  { path: 'home', component: HomepageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomepageComponent,
    TitleComponent,
    AboutComponent,
    ProjectsComponent
  ]
})
export class HomeModule { }
