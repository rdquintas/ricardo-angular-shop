import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.switchMap(user => {
      return this.userService.get(user.uid);
    }).map(appUser => {
      console.log('appUser.isAdmin:', appUser.isAdmin);
      return appUser.isAdmin;
    });
  }
}
