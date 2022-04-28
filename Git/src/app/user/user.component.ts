import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
userLabel = 'Mohamedlee27'
user!:any;
repo!:any;
  constructor(private ServiceService:ServiceService) { }
  callInfo(newPerson:any):void{
    this.userLabel = newPerson

    this.ferryRepo=(newPerson)
    this.ferryUser=(newPerson)

    this.ServiceService.fetchRepo(this.userLabel).subscribe((repo)=>{
      this.repo = repo
      console.log (repo);
    })

    this.ServiceService.serveUser(this.userLabel).then((user)=>(this.user=user))

  } 

ferryRepo(userLabel:string):void{
  this.ServiceService.fetchRepo(userLabel).subscribe((repo)=>{
    this.repo = repo
  })

}

ferryUser(userLabel:string):void{
 this.ServiceService.serveUser(userLabel).then((user)=>(this.user=user))
 

}



  ngOnInit(): void {
  }

}
