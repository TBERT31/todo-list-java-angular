import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  name = this.route.snapshot.params['name'];
  welcomeMessageFromService = "";

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ){}

  ngOnInit(): void {
    this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.welcomeDataService.executeHelloWorldBeanService()
      .subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
      );
  }

  getWelcomeMessageWithParameter(name:string){
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(name)
      .subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
      );
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.message;
  }
}
