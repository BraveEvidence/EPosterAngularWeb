import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LoginResponse {
  status: number;
  msg: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class EposterService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<LoginResponse>(
      'https://eposter-rest.herokuapp.com/api/logIn',
      {
        email: username,
        password,
      }
    );
  }
}
