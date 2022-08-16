
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseurl:string = "http://localhost:8000";

  createUser(body: any){
    return this.http.post(`${this.baseurl}/user/register/`, body);

  }

  loguser(body: any){
    return this.http.post(`${this.baseurl}/user/login`, body,{responseType: 'json'});
  }

  
}
