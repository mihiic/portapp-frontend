import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  @Input() mainTitle: String;
  @Input() subtitle: String;
  @Input() additional: String[];

  constructor() { }

  ngOnInit() {
    if (!this.additional) {
      this.additional = [];
    }
  }

}
