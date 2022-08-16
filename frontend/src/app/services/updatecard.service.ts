import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatecardService {

  baseurl:string = "http://localhost:8000/user";

  constructor(private http:HttpClient) { }

  updatecard( data:any){
    return this.http.put(`${this.baseurl}/updatecard`, data,{responseType:'json'}); //passing using params entryid
  }
}
