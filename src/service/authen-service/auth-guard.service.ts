import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,private authenticationService:AuthenticationServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser){
      return true;
    }
    this.router.navigate(['/login'],{queryParams: { returnUrl:state.url}})
    return false;
    throw new Error('Method not implemented.');
  }
}
