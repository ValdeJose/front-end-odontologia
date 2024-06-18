import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {


    private apiUrl = 'http://localhost:3000/cita';
  
    constructor(private http: HttpClient) {}
  
    getCitaList(): Observable<Cita[]> {
      return this.http.get<Cita[]>(`${this.apiUrl}/getall`);
    }
  
    addCita(cita: Cita): Observable<Cita> {
      return this.http.post<Cita>(`${this.apiUrl}/create`, cita);
    }

  }
  