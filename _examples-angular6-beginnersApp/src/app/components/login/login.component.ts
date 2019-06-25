import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const targetForm = event.target;
    console.log('targetForm:', targetForm);
    const userName = targetForm.querySelector('#userName').value;
    const password = targetForm.querySelector('#password').value;
    console.log('userName, password:', userName, password);
  }
}
