import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient,
  ) { }

  createBasicAuthenticationHttpHeader(){
    let username = 'user';
    let password = 'password';
    let basicAuthHeaderString = 'Basic '+ window.btoa(username+":"+password);
    return basicAuthHeaderString;
  }

  retrieveAllTodos(username:string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  
  deleteTodo(username:string, id:number){
    return this.http.delete<any>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username:string, id:number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username:string, id:number, todo:Todo){
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`, 
      todo
    );
  }

  createTodo(username:string, todo:Todo){
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`, 
      todo
    );
  }
}
