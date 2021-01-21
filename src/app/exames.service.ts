import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {
  private baseUrl = 'http://localhost:8080/exames';
  constructor(private http: HttpClient) { }
  getExamesList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getExames(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createExames(exames: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, exames);
  }

  updateExames(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteExame(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
}
