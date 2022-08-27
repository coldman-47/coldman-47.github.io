import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username?: string;
  password?: string;
  submitted = false;

  constructor(private authSrv: AuthService, private messageSrv: MessageService) {}

  ngOnInit(): void {
    const choicesElmCont = document.getElementById("choices-container");
    const btnSignUp = document.getElementById("btn-sign-up");
    const btnLogin = document.getElementById("btn-login");

    btnSignUp!.addEventListener("click", function () {
      choicesElmCont!.classList.remove("login-step");
    });

    btnLogin!.addEventListener("click", function () {
      choicesElmCont!.classList.add("login-step");
    });

    this.authSrv.conError.subscribe((error) =>
      this.messageSrv.add({
        severity: 'error',
        summary: 'La connexion a échoué!',
        detail: error,
      })
    );
  }

  login(admin = false) {
    let username = this.username!;
    let password = this.password!;
    this.authSrv.login({ username, password }, admin);
  }

}
