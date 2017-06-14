import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../resources/project';
import { Pagination } from '../../resources/pagination';
import { RouteAnimation } from '../../resources/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [ RouteAnimation ]
})
export class ProjectsComponent implements OnInit {
  @Input() title: String;
  @Input() maxPages: number;
  @Input() perPage: number;
  @Input() partOfPage: boolean;

  public projects: Project[];
  public pagination: Pagination;
  public subtitle: String;

  constructor(
    private projectsService: ProjectsService
  ) {
    this.projects = [];
  }

  public setDefaults(): void {
    if (!this.title) {
      this.title = 'Projects';
    }
    if (!this.perPage) {
      this.perPage = 9;
    }
    this.subtitle = 'Some of the projects I\'ve worked on';
    this.pagination = new Pagination(this.perPage)
  }

  ngOnInit() {
    this.setDefaults();

    this.projectsService.getProjects().subscribe(
      (projects) => {
        if (this.maxPages) {
          this.projects = projects.splice(0, this.maxPages * this.perPage);
        } else {
          this.projects = projects;
        }
        this.pagination.setPagesNumber(this.projects);
      }
    );
  }
}
