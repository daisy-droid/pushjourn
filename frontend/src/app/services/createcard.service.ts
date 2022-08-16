import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatecardService {

 
  baseurl:string = "http://localhost:8000/user";


  

  constructor(private http:HttpClient) { }

  createCard(data: any, id:any){
    return this.http.post(`${this.baseurl}/createcard/${id}`, data,{responseType:'json'});

  }
}
