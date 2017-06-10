import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../resources/project';
import { Pagination } from '../../resources/pagination';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ ProjectsService ]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public pagination: Pagination;

  constructor(
    private projectsService: ProjectsService
  ) {
    this.projects = [];
    this.pagination = new Pagination(6);
  }

  ngOnInit() {
    this.projectsService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
        this.pagination.setPagesNumber(projects);
      }
    );
  }
}
