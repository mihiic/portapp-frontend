import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination/pagination.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    Ng2PageScrollModule.forRoot(),
  ],
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ]
})
export class AppCommonModule { }
