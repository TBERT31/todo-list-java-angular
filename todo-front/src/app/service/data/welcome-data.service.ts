import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API_URL} from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(
    public message:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient,
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world-bean`
    )
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string){
    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world/path-variable/${name}`
    );
  }
}
