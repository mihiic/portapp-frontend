import { Injectable } from '@angular/core';

@Injectable()
export class SocialIconService {

  constructor() { }

  public getSocialIconClass(socialName: string): any {
    const socialClass: string = 'fa-' + socialName;
    return { [socialClass]: true }
  }
}
