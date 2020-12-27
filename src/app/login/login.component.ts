import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/service/login-service.service';
import { AuthenticationServiceService } from 'src/service/authen-service/authentication-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /***********/
  checkIfBlank = false;
  displayError = false;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  credentials = { username: '', password: '' };

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private authenService: AuthenticationServiceService,
    private loginService: LoginServiceService,
    private route: ActivatedRoute
  ) {
    if (this.authenService.currentUserValue) {
      this.router.navigate(['/admin/home']);
    }
  }
  ngOnInit(): void {
    this.authenService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  data = {};
  getRole: {};
  getLink: string;
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.login();
    }
  }
  login() {
    // this.checkSession();
    const username = this.credentials.username;
    const password = this.credentials.password;
    // debugger
    if (username == '' || password == '') {
      this.checkIfBlank = true;
      return false;
    }
    this.loginService.login(username, password).subscribe(
      (data) => {
        if (data) {
          this.data = data;
          this.getRole = data;
          const currentUser = {
            username,
            password,
          };
          window.sessionStorage.setItem('token', JSON.stringify(currentUser));
          let admin_Or_Staff = JSON.stringify(this.getRole).slice(10, 20);
          let user = JSON.stringify(this.getRole).slice(10, 19);

         
          this.router.navigateByUrl(this.returnUrl);
          if (admin_Or_Staff == 'ROLE_ADMIN') {
            this.router.navigate(['/admin/home']);
            window.sessionStorage.setItem('ROLE', 'Admin');
          } else if (user == 'ROLE_USER') {
            window.sessionStorage.setItem('ROLE', 'User');
            this.router.navigateByUrl(this.returnUrl);
          } else if (admin_Or_Staff == 'ROLE_STAFF') {
            window.sessionStorage.setItem('ROLE', 'Staff');
            this.router.navigate(['/admin/home']);
          }
        }
      },

      (err) => {
        console.log(err);
        switch (err.status) {
          case 0:
            console.log(err);
            break;
          case 401:
            this.displayError = true;
            break;
          case 403:
            alert('eror 403 forbiden');
            this.displayError = true;
            break;
          case 404:
            alert('eror 404 forbiden');
            this.displayError = true;
            break;
          default:
            break;
        }

        console.log(err.status);
      }
    );
  }

  logout() {
    sessionStorage.clear();
  }
  checkSession() {
    if (window.sessionStorage.length >= 0) {
      console.log(sessionStorage.length);
      sessionStorage.clear();
    }
  }
}
