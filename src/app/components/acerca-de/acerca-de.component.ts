import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private acercaDeService: AcercaDeService) {}

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.acercaDeService.getUser().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
