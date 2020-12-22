import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}
  getPublicKey() {
    return this.http.get('http://localhost:4000/');
  }
  postForm(formulario: any) {
    return this.http.post('http://localhost:4000/recepcionFormulario', {
      body: formulario,
      headers: this.headers,
    });
  }
}
