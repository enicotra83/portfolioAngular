import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/api/proyectos`);
  }

  public addProyectos(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(
      `${this.apiServerUrl}/api/proyectos`,
      proyecto
    );
  }

  public updateProyectos(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(
      `${this.apiServerUrl}/api/proyectos`,
      proyecto
    );
  }
  public deleteProyectos(idProy: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/api/proyectos/${idProy}`
    );
  }
}
