import { ReflectiveInjector } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs/Observable';

export class Project {
  private projectsService: ProjectsService;

  constructor(
    public id: number,
    public projectName: String,
    public status: String,
    public briefDescription: String,
    public thumbnailImage: String,
    public projectSubtitle?: String
  ) {
    const injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([
      ProjectsService
    ]);

    this.projectsService = injector.get(ProjectsService);
    if (!this.projectSubtitle) {
      this.projectSubtitle = '';
    }
  }

  public getTechnologies(): Observable<String[]> {
    return this.projectsService.getTechnologies(this);
  }

  public getDescriptions(): Observable<String[]> {
    return this.projectsService.getDescriptions(this);
  }

  public getGallery(): Observable<String[]> {
    return this.projectsService.getGallery(this);
  }
}
