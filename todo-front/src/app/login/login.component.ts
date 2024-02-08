import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username = "in28minutes";
  password = '';
  errorMessage = "Invalid credentials";
  invalidLogin = false;


  constructor(
    private router: Router
  ){

  }

  ngOnInit(): void {
    
  }

  handleLogin(){
    if(this.username === "in28minutes" && this.password === "test1234"){
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }

}
