import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ]
})
export class AppCommonModule { }
