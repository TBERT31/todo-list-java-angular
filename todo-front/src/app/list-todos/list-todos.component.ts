import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{

  todos = [
    { id:1, description:"Learn to code with Angular" },
    { id:2, description:"Learn to code with Spring Boot" },
    { id:3, description:"Go to sport" },
    { id:3, description:"Walk with dog (Kaya Kaïïï)" },
  ];


  constructor(){

  }

  ngOnInit(): void {
    
  }

}
