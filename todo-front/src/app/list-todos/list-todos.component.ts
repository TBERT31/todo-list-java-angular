import { Component, OnInit } from '@angular/core';


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

  todos = [
    new Todo(1, "Learn to code with Angular", false, new Date()),
    new Todo(2, "Learn to code with Spring Boot", false, new Date()),
    new Todo(3, "Go to sport", false, new Date()),
    new Todo(4, "Walk with dog (Kaya Kaïïï)", false, new Date()),
    // { id:1, description:"Learn to code with Angular" },
    // { id:2, description:"Learn to code with Spring Boot" },
    // { id:3, description:"Go to sport" },
    // { id:3, description:"Walk with dog (Kaya Kaïïï)" },
  ];

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
