import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../resources/project';
import { ProjectCardAnimation } from './project-card.animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [ ProjectCardAnimation ]
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  public technologies: String[];

  constructor(
  ) { }

  ngOnInit() {
    this.project.getTechnologies().subscribe(
      technologies => this.technologies = technologies
    )
  }

  public technologiesText(): String {
    return this.technologies.join(', ');
  }

  public trimedProjectName(): String {
    if (this.project.projectName.length > 26) {
      return this.project.projectName.substring(0, 24) + '...';
    }
    return this.project.projectName;
  }

  public trimmedDescription(): String {
    if (this.project.briefDescription.length > 130) {
      return this.project.briefDescription.substring(0, 129) + '...';
    }
    return this.project.briefDescription;
  }
}
