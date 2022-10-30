import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getUser(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/1`);
  }
  public updateUser(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario`, usuario);
  }
}
