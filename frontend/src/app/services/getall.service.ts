import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetallService {


  baseurl:string = "http://localhost:8000/user";

  constructor(private http:HttpClient) { }

 getall(userId:any){

    return this.http.get(`${this.baseurl}/getAll/${userId}`);

  }
}
