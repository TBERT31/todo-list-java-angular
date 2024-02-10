import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{

  todos:Todo[] = [];
  message:string="";

  constructor(
    private todoDataService : TodoDataService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos('tbert31')
      .subscribe(data => {
        this.todos = data;
      });
  }

  deleteTodo(id: number){
    this.todoDataService.deleteTodo('tbert31', id)
      .subscribe(data => {
        console.log(data);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      });
  }

  updateTodo(id: number){
    this.router.navigate(['todos', id]);
  }

}
