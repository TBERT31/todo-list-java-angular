import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ){

  }

  ngOnInit(): void {
    
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }

}
