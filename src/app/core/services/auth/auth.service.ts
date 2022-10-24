import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedUserToken = new BehaviorSubject<string | null>(null);
  user = new BehaviorSubject<any>(null);
  conError = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {
    this.getUser();
  }

  get userToken(): string | null{
    return this.loggedUserToken.value;
  }

  login(credentials: {username: string, password: string}, admin = false){
    return this.http.post(environment.backendUrl+`login/authentication${admin ? '/admin' : ''}`, credentials).subscribe({
        next: (res: any) => this.storeToken(res.token),
        error: (err) => this.conError.next(err.error)
      });
  }

  logout(){
    this.loggedUserToken.next(null);
    localStorage.clear();
    return this.router.navigate(['/login']);
  }

  private storeToken(token: string) : void {
    localStorage.setItem("token", token);
    this.loggedUserToken.next(token);
    this.getUser();
    this.router.navigate(['/']);
  }

  private getUser(){
    const helper = new JwtHelperService();
    this.loggedUserToken.next(localStorage.getItem('token'));
    if (this.loggedUserToken.value) {
      var {prenom, nom, isAdmin, etablissement} = helper.decodeToken(this.loggedUserToken.value);
      this.user.next({prenom, nom, etablissement, isAdmin});
    }
  }

}
