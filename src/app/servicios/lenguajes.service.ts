import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lenguaje } from '../models/lenguaje';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getLenguaje(): Observable<Lenguaje[]> {
    return this.http.get<Lenguaje[]>(`${this.apiServerUrl}/api/lenguaje`);
  }
  public updateLenguaje(lenguaje: Lenguaje): Observable<Lenguaje> {
    return this.http.put<Lenguaje>(`${this.apiServerUrl}/api/lenguaje`, lenguaje);
  }

}
