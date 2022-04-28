import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {
gitLink = 'https://api.github.com'

async serveUser(userLabel:string){
  const moha = this.http.get<any>(`${this.gitLink}/users/${userLabel}`)
  return await lastValueFrom (moha).then((response)=>response)
}

fetchRepo(userLabel:string):Observable<any>{
  return this.http.get<any>(`${this.gitLink}/users/${userLabel}/repos`)
}

  constructor(private http: HttpClient) { }
}
