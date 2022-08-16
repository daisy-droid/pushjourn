import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletecardService {

  
  baseurl:string = "http://localhost:8000/user";


  

  constructor(private http:HttpClient) { }

  deletecard(entryId: any){
    return this.http.delete(`${this.baseurl}/delete/${entryId}`, {responseType: 'json'}); //passing using params entryid

  }
}
