import { Component, Input, OnInit } from '@angular/core';
import { TechnicalSkill } from '../../../resources/skills';

@Component({
  selector: 'app-technical-skill',
  templateUrl: './technical-skill.component.html',
  styleUrls: ['./technical-skill.component.css']
})
export class TechnicalSkillComponent implements OnInit {
  @Input() technicalSkill: TechnicalSkill;

  constructor() { }

  ngOnInit() {
  }

}
