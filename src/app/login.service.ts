import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { environment } from "../environments/enironment.development"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.API_URL}/login`, loginData);
  }

  register(username: string, email: string, password: string): Observable<any> {
    const registerData = { username, email, password };
    return this.http.post<any>(`${this.API_URL}/register`, registerData);
  }
}
