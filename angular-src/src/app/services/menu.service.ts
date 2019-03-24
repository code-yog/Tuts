import { Injectable } from '@angular/core';
//import { Http,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService { 
  constructor(private http: HttpClient  ) { }

  getTitles(){
    // let headers = new Headers();
    // headers.append('Content-Type','application/json');
    // return this.http.get('http://localhost:3000/tutorials/titles',{headers:headers});
    return this.http.get('http://localhost:3000/tutorials/titles');

  }
}
