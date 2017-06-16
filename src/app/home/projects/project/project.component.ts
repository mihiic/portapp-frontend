import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../resources/project';
import { ProjectsService } from '../../../services/projects.service';
import { RouteAnimation } from '../../../resources/animations';
import { ProjectLink } from '../../../resources/projectLink';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [ RouteAnimation ]
})
export class ProjectComponent implements OnInit {
  public project: Project;
  public technologies: String[];
  public descriptions: String[];
  public gallery: String[];
  public links: ProjectLink[];
  public additionalInformations: String[];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadProject(+params['id']);
    })
  }

  private loadProject(id: number): void {
    this.projectsService.getProject(id).subscribe(
      project => {
        this.project = project;
        this.loadProjectInformation();
      }
    );
  }

  private loadProjectInformation(): void {
    this.projectsService.getTechnologies(this.project).subscribe(
      technologies => this.technologies = technologies
    );

    this.projectsService.getDescriptions(this.project).subscribe(
      descriptions => this.descriptions = descriptions
    );

    this.projectsService.getGallery(this.project).subscribe(
      gallery => this.gallery = gallery
    );

    this.projectsService.getLinks(this.project).subscribe(
      links => this.links = links
    );

    this.projectsService.getAdditionalInfo(this.project).subscribe(
      additional => this.additionalInformations = additional
    )
  }
}
