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
  public editProyecto: Proyecto | undefined;
  public agregadoProyecto: Proyecto | undefined;
  public deleteProyecto: Proyecto | undefined;

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

  public onAddProyecto(proyecto: Proyecto) {
    this.agregadoProyecto = proyecto;
    this.proyectoService.addProyectos(proyecto).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public agregarAEdit(proyecto: Proyecto): void {
    console.log(proyecto);
    this.editProyecto = proyecto;
  }
  public onEditProyecto(proyecto: Proyecto): void {
    this.editProyecto = proyecto;
    this.proyectoService.updateProyectos(proyecto).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public ondeleteProyecto(idProy: number): void {
    this.proyectoService.deleteProyectos(idProy).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public imprimir(valor: any): void {
    console.log(valor);
  }
}
