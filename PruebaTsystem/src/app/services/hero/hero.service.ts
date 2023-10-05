import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

e


const baseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';

@Injectable({
  providedIn: 'root'
})

export class HeroService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${baseUrl}/all.json`);
  }

  get(id: any): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByName(name: any): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${baseUrl}?name=${name}`);
  }
}
