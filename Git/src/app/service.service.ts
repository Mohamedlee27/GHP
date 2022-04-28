import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {
gitLink = 'https://api.github.com'

async serv(userLabel:){
  const moha = this.http.get<any>(`${this.gitLink}/users/${userLabel}`)
  return await lastValueFrom (moha).then((Response)=>Response)
}

  constructor() { }
}
