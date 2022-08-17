import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username?: string;
  password?: string;
  submitted = false;

  constructor() {}

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
  }

}
