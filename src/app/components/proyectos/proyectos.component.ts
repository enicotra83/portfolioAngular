import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Proyecto } from 'src/app/models/proyectos';
import { ProyectoService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  public proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.getProyecto();
  }

  public getProyecto(): void {
    this.proyectoService.getProyectos().subscribe({
      next: (Response: Proyecto[]) => {
        this.proyectos = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
