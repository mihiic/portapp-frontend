import { Component, Input, OnInit } from '@angular/core';
import { OtherSkill } from '../../../resources/skills';

@Component({
  selector: 'app-other-skill',
  templateUrl: './other-skill.component.html',
  styleUrls: ['./other-skill.component.css']
})
export class OtherSkillComponent implements OnInit {
  @Input() skill: OtherSkill;

  constructor() { }

  ngOnInit() {
  }

}
