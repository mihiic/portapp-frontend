import { Injectable } from '@angular/core';
import { User } from '../resources/user';
import { Observable } from 'rxjs/Observable';
import { SocialLink } from '../resources/socialLink';
import { PersonalInformation } from '../resources/personalInformation';
import { WorkExperience } from '../resources/workExperience';
import { Education } from '../resources/education';

@Injectable()
export class UserService {
  constructor() { }

  public getUser(): Observable<User> {
    const user: User = new User(
      'Mihael',
      'Međan',
      'Finest selection of things I made and things I think I know',
      'assets/images/profilka.jpg'
    );

    return Observable.create(observer => {
      observer.next(user);
      observer.complete();
    });
  }

  public getAbout(): Observable<String[]> {
    const about: String[] = [
      `22 years of age. Located in Zagreb, Croatia. Chasing Master's degree in Computer Science at Faculty of Electrical
      Engineering and Computing, University of Zagreb. Working as a web-developer for money, learning game development
      for fun.`,
      `During 8 years of playing programmer, I've tried a lot of programming technologies, tools, languages and
      libraries. I started and finished a lot of projects, abandoned even more of them. Been proud of some, hoped noone
      would know other ones exist.`,
      `Lately, I've been really finding myself exactly where internet forums years ago initially sent me,
      <i>"if you wanna make games, you should learn C++"</i> - everyone on the internet. Well as it turns out, it's not
      completely true. Today, you can literally make games in anything. But there is nothing like the feeling of power
      once you tame the beast known by the name of C++.`,
      `This portfolio will be exclusively of the things I made in C++ and regarding game development. Rest of my work
      can be found in the CV.`,
      `Find me online!`
    ];

    return Observable.create(observer => {
      observer.next(about);
      observer.complete();
    })
  }

  public getSocial(): Observable<SocialLink[]> {
    const socialLinks: SocialLink[] = [
      { name: 'instagram', link: 'https://www.instagram.com/mihiic/'},
      { name: 'linkedin', link: 'https://www.linkedin.com/in/mihiic/'},
      { name: 'youtube', link: 'https>//www.facebook.com/'},
      { name: 'github', link: 'https://www.github.com/' }
    ];

    return Observable.create(observer => {
      observer.next(socialLinks);
      observer.complete();
    })
  }

  public getPersonalInformation(): Observable<PersonalInformation> {
    const personalInformation: PersonalInformation = {
      email: 'mihic.medan@gmail.com',
      address: 'Ferežani 73, 48260 Križevci, Croatia',
      phone: '+385958897776',
      sex: 'male',
      dateOfBirth: new Date(1995, 6, 12)
    };

    return Observable.create(observer => {
      observer.next(personalInformation);
      observer.complete();
    })
  }

  public getWorkExperience(): Observable<WorkExperience[]> {
    const workExperience: WorkExperience[] = [
      {
        position: 'Web Developer', company: 'Ingemark', companyUrl: 'http://www.ingemark.com',
        from: new Date(2016, 4), until: null, description: 'Writing features and automated tests.',
        technologies: ['Ruby on Rails', 'AngularJS']
      },
      {
        position: 'Game Developer', company: 'Icefix', companyUrl: 'hehe',
        from: new Date(2015, 4), until: new Date(2016, 4), description: 'Game development.',
        technologies: ['C#', 'Unity3D']
      }
    ];

    return Observable.create(observer => {
      observer.next(workExperience);
      observer.complete();
    })
  }

  public getEducation(): Observable<Education[]> {
    const education: Education[] = [
      {
        title: 'Bachelor of Computer Science', from: new Date(2014, 9), to: new Date(2017, 7),
        institution: 'Faculty of Electrical Engineering and Computing, University of Zagreb, Croatia'
      },
      {
        title: 'Master of Computer Science', from: new Date(2017, 9),
        institution: 'Faculty of Electrical Engineering and Computing, University of Zagreb, Croatia'
      }
    ];

    return Observable.create(observer => {
      observer.next(education);
      observer.complete();
    })
  }
}
