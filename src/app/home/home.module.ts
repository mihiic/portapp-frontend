import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TitleComponent } from './homepage/title/title.component';

const homeRoutes: Routes = [
  { path: 'home', component: HomepageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomepageComponent, TitleComponent]
})
export class HomeModule { }
