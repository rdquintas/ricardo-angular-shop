import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
    // afAuth.authState.subscribe(user => {
    //   this.user = user;
    //   console.log('authstate:', this.user);
    // });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
