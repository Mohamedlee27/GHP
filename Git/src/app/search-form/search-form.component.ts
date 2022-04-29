import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() newPerson= new EventEmitter()
  userLabel:string=''
  sub(userLabel:string){
    this.newPerson.emit(userLabel)
  }


  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
  }

}
