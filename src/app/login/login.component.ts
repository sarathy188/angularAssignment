import { AuthGuardService } from './../auth-guard.service';
import { AuthGuard } from './../auth.guard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,
               private auth: AuthGuard,
              private authGuardSer: AuthGuardService) { }

  username: string;
  password: string;

  ngOnInit(): void {
  }

  login(): void {


    this.authGuardSer.username = this.username;
    this.authGuardSer.password = this.password;

    if ( this.username === 'admin' && this.password === 'admin') {
     this.router.navigate(['home']);
    }else {
      alert('Invalid credentials');
    }
  }

}
