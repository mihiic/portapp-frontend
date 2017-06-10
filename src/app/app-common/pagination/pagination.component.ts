import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from '../../resources/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pagination: Pagination;
  @Input() list: any[];

  constructor() { }

  ngOnInit() {
  }

  public formatPages(): String {
    return `${this.pagination.currentPage} / ${this.pagination.pages}`;
  }
}
