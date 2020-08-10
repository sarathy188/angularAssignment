import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  username: string;
  password: string;
  isLoggedIn: boolean;

  constructor(private router: Router) { }

  login_1(): boolean {
    this.isLoggedIn = false;
    if ( this.username === 'admin' && this.password === 'admin') {
     this.isLoggedIn = true;

    }else {
      alert('Invalid credentials');
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
}
