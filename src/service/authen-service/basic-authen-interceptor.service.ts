import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenInterceptorService
  implements HttpInterceptor, CanActivate {
  //   userName: string;
  //   get allowDay(): string {
  //     return this.userName;
  // }
  //  set allowDay(value: string) {
  //     this.userName = value;

  // }
  constructor(private authenService: AuthenticationServiceService,private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let user = sessionStorage.getItem('ROLE');
    if (user) {
      return true;
    }
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    return false;
    if (user == 'Admin') {
      return true;
    } else if (user == null) {
      this.router.navigate(['/login'])
      return false;
    }else if(user!='Admin'){
      this.router.navigate(['/'])
      return false;
    }
   
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(sessionStorage.getItem('token'));
    let length = sessionStorage.length;
    if (currentUser && typeof currentUser === 'object') {
      req = req.clone({
        setHeaders: {
          Authorization:
            'Basic ' +
            window.btoa(currentUser.username + ':' + currentUser.password),
        },
      });
    }

    return next.handle(req);
  }
}
