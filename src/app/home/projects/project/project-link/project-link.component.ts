import { Component, Input, OnInit } from '@angular/core';
import { ProjectLink } from '../../../../resources/projectLink';
import { SocialIconService } from '../../../../app-common/social-icon.service';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.css']
})
export class ProjectLinkComponent implements OnInit {
  @Input() projectLink: ProjectLink;

  constructor(
    public socialIconService: SocialIconService
  ) { }

  ngOnInit() {

  }
}
