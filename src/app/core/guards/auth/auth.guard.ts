import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authSrv: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const helper = new JwtHelperService(),
      token = this.authSrv.userToken;
    if (token && helper.decodeToken(token)) {
      if (helper.isTokenExpired(token)) {
        this.authSrv.logout();
      }
      if (route.url[0] && route.url[0].path === 'login') {
        this.router.navigate(['/']);
      }
      return true;
    } else
      return route.url[0]?.path !== 'login'
        ? this.router.navigate(['/login'])
        : true;
  }
}
