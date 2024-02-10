import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  id: number = 0;
  todo: Todo;

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(0, '', false, new Date());
    this.todoDataService.retrieveTodo("tbert31", this.id)
      .subscribe(
        data => this.todo = data
      );
  }

  saveTodo(){
    this.todoDataService.updateTodo("tbert31", this.id, this.todo)
      .subscribe(data => {
          this.router.navigate(['todos']);
      }
    );
  }
}
