import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LoginResponse {
  status: number;
  msg: string;
  token: string;
}

interface AddDoctorResponse {
  status: number;
  msg: string;
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

  addDoctor(doctorName: string, doctorCode: string) {
    return this.http.post<AddDoctorResponse>(
      'https://eposter-rest.herokuapp.com/api/addDoctor',
      {
        doctorName,
        doctorCode,
      }
    );
  }
}
