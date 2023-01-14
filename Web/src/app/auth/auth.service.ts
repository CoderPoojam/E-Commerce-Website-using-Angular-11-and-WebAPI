import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl= 'http://localhost:56936/api/BuyCloth/';
  constructor(private http:HttpClient) { }
  authUser(user:any)
  {
    return this.http.post(this.baseUrl,user);
    }
  }
