import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloWorldBean } from './data/welcome-data.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient,
  ) { }

  authenticate(username:string, password:string){
    if(username === "tbert31" && password === "1234"){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }

    return false;
  }


  executeBasicAuthenticationService(username:string, password:string){
    let basicAuthHeaderString = 'Basic '+ window.btoa(username+":"+password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<AuthticationBean>(
      'http://localhost:8080/basicauth', 
      {headers}
    )
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null); 
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthticationBean{
  constructor(public message:string){}
}