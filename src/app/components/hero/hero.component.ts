import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { NgForm } from '@angular/forms';
import { HeroService } from 'src/app/servicios/hero.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.heroService.getUser().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public agregarAEdit(usuario: Usuario): void {
    console.log(usuario);
    this.editUsuario = usuario;
  }

  public onEditUsuario(usuario: Usuario): void {
    this.heroService.updateUser(usuario).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUser();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  //con BD JSON interno
  //miPortfolio: any;
  //constructor(private datosPortfolio: PortfolioService) {}

  //ngOnInit(): void {
  //  this.datosPortfolio.obtenerDatos().subscribe((datos) => {
  //    console.log(datos);
  //    this.miPortfolio = datos;
  //  });
  //}
}
