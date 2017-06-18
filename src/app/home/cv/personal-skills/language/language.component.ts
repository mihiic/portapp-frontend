import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../../../../resources/skills';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  @Input() lang: Language;

  constructor() { }

  ngOnInit() {

  }
}
