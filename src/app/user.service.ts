import { Injectable } from '@angular/core';
import { User } from './resources/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor() { }

  public getUser(): Observable<User> {
    const user: User = new User('First', 'Last', new Date(1995, 6, 12), 'awesome');

    return Observable.create(observer => {
      observer.next(user);
      observer.complete();
    });
  }
}
