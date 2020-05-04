import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {
    username: '',
    password: ''
  };
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginUser(formValues) {
    this.authService.login(this.model)
        .subscribe(next => {
          console.log('Logged in successfully');
        }, error => {
          console.log(error);
        });
    console.log(this.model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
