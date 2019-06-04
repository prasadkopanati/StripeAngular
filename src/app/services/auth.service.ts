import {Injectable} from '@angular/core';
import { first } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  constructor() {}

  async getUser(user_id: string, password: string ) {
    const isValid = (user_id === 'yousef' && password === 'abcdefg') || (user_id === 'prasad' && password === 'abcdefg');
    const authState = { isUserValid: isValid, uid:   isValid ? user_id : '' };

    const ret = of( authState);
    return ret.pipe( first()).toPromise();
  }
}
