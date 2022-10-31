import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getInfo(): Observable<Info> {
    return this.http.get<Info>(`${this.apiServerUrl}/api/info/1`);
  }
  public updateInfo(usuario: Info): Observable<Info> {
    return this.http.put<Info>(`${this.apiServerUrl}/api/info`, usuario);
  }
}
