import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetbyidService {

 
  baseurl:string = "http://localhost:8000/user";

  constructor(private http:HttpClient) { }

 getbyid(entryid:any){

    return this.http.get(`${this.baseurl}/getbyid/${entryid}`);

  }
}
