import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username = "tbert31";
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
    if(this.username === "tbert31" && this.password === "1234"){
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }

}
