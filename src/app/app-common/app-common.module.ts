import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination/pagination.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from "@angular/router";
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    Ng2PageScrollModule.forRoot(),
  ],
  declarations: [
    PaginationComponent,
    NavigationComponent,
    PageTitleComponent
  ],
  exports: [
    PaginationComponent,
    NavigationComponent,
    PageTitleComponent
  ]
})
export class AppCommonModule { }
