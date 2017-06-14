import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../../resources/pagination';
import { EasingLogic } from 'ng2-page-scroll';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pagination: Pagination;
  @Input() list: any[];
  @Input() scrollTo: String;

  @Output() pageChanged: EventEmitter<any>;

  public easingFunction: EasingLogic;

  constructor() {
    this.pageChanged = new EventEmitter();
    this.easingFunction = {
      ease: (time: number, begin: number, change: number, duration: number): number => {
        if ((time /= duration / 2) < 1) {
          return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
        }
        return change / 2 * (-Math.pow(2, -10 * --time) + 2) + begin;
      }
    };
  }

  ngOnInit() {
    if (!this.scrollTo) {
      this.scrollTo = 'paginated';
    }
  }

  public prevPage(): void {
    this.pageChanged.emit({ direction: 'prev' });
    this.pagination.prevPage();
  }

  public nextPage(): void {
    this.pageChanged.emit({ direction: 'next' });
    this.pagination.nextPage();
  }

  public formatPages(): String {
    return `${this.pagination.currentPage} / ${this.pagination.pages}`;
  }
}
