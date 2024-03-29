import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwtDto';
import { LoginUsuario } from '../models/loginUsuario';
import { NuevoUsuario } from '../models/nuevoUsuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'https://enicotrabackend.herokuapp.com/auth';

  constructor(private httpClient: HttpClient) {}
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUsuario);
  }
}
