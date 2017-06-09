import { Injectable } from '@angular/core';
import { User } from './resources/user';
import { Observable } from 'rxjs/Observable';
import { SocialLink } from "./resources/socialLink";

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
      { name: 'linkedin', link: 'https://www.linkedin.com/in/mihiic/'}
    ]

    return Observable.create(observer => {
      observer.next(socialLinks);
      observer.complete();
    })
  }
}
