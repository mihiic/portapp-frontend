import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '../resources/project';

@Injectable()
export class ProjectsService {

  constructor() { }

  public getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      new Project(1, 'very project', 'complete', 'awesome', 'assets/images/project.png'),
      new Project(2, 'serious project very very', 'abandoned', 'not so awesome', 'assets/images/project.png'),
      new Project(3, 'zmajeva jaja', 'in progress',
        '7 jaja od velikog zmaja z jos 7 jaja od jos veceg zmaja i sad to tako u ' +
        'nedogled jer zmajevi imaju dost velika jaja kao sto je opce poznato ne iz bajki', 'assets/images/project.png'),
      new Project(4, 'lagano', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(5, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(6, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(7, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(8, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(9, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(10, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(11, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(12, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png'),
      new Project(13, 'i jos', 'in progress', '7 jaja od velikog zmaja z', 'assets/images/project.png')
    ];

    return Observable.create(observer => {
      observer.next(projects);
      observer.complete();
    });
  }

  public getProject(id: number): Observable<Project> {
    const project: Project = new Project(1, 'Ground Zero', 'in progress',
      'znas da vrijeme je', 'assets/images/project.png', '3D game development framework');

    return Observable.create(observer => {
      observer.next(project);
      observer.complete();
    });
  }

  public getTechnologies(project: Project): Observable<String[]> {
    const technologies: String[] = [
      'C++11', 'OpenGL 4.5', 'SFML', 'Bullet3D'
    ];

    return Observable.create(observer => {
      observer.next(technologies);
      observer.complete();
    });
  }

  public getDescriptions(project: Project): Observable<String[]> {
    const descriptions: String[] = [
      `Simple 3D game development framework developed in C++11. OpenGL 4.5 is used for rendering, and SFML library for
      things like image loading, window managment and input handling.`,
      `Started as a bachelor's final project but was continued for personal usage. Aimed for creating simple 3D game
      prototypes and demos to make building game development portfolio easier.`,
      `It is in development and it will stay that way indefinitely, with new features implemented as needed for
      particular demos.`
    ];

    return Observable.create(observer => {
      observer.next(descriptions);
      observer.complete();
    });
  }

  public getGallery(project: Project): Observable<String[]> {
    const images: String[] = [
      'assets/images/project_image_1.png',
      'assets/images/project_image_2.png'
    ];

    return Observable.create(observer => {
      observer.next(images);
      observer.complete();
    });
  }
}
