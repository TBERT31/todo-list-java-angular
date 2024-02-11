import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import {TODO_JPA_API_URL} from 'src/app/app.constants';

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
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }
  
  deleteTodo(username:string, id:number){
    return this.http.delete<any>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username:string, id:number){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username:string, id:number, todo:Todo){
    todo.user = username;
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`, 
      todo
    );
  }

  createTodo(username:string, todo:Todo){
    todo.user = username;
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/todos`, 
      todo
    );
  }
}
