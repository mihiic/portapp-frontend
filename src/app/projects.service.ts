import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from './resources/project';

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

  public getTechnologies(project: Project): Observable<String[]> {
    const technologies: String[] = [
      'C++11', 'OpenGL 4'
    ];

    return Observable.create(observer => {
      observer.next(technologies);
      observer.complete();
    });
  }

  public getDescriptions(project: Project): Observable<String[]> {
    const descriptions: String[] = [
      `very cool and <b>VERY</b> serious project man`,
      `i really mean it no lie family. it was made in one night, and it was really long night, so trust me man, it is
      really really really that very good and this strong line describes it best`
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
