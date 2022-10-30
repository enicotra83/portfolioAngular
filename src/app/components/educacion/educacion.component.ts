import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  public educaciones: Educacion[] = [];
  public educations2 = this.educacionService.getEducacion();
  public editEducacion: Educacion | undefined;
  public agregadaEducacion: Educacion | undefined;
  public deleteEducacion: Educacion | undefined;

  constructor(private educacionService: EducacionService) {}

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion(): void {
    this.educacionService.getEducacion().subscribe({
      next: (Response: Educacion[]) => {
        this.educaciones = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onAddEducacion(educacion: Educacion) {
    this.agregadaEducacion = educacion;
    this.educacionService.addEducacion(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onEditEducacion(educacion: Educacion): void {
    this.editEducacion = educacion;
    this.educacionService.updateEducacion(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public ondeleteEducacion(idEdu: number): void {
    this.educacionService.deleteEducacion(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public imprimir(valor: any): void {
    console.log(valor);
  }

  public agregarAEdit(educacion:Educacion):void{
    console.log(educacion);
    this.editEducacion = educacion;
  }
}
