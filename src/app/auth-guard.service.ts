import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    this.auth.user$.subscribe(user => {
      if (user) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    });
  }
}
