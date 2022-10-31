import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/models/info';
import { NgForm } from '@angular/forms';
import { HeroService } from 'src/app/servicios/hero.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public info: Info | undefined;
  public editInfo: Info | undefined;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  public getInfo(): void {
    this.heroService.getInfo().subscribe({
      next: (response: Info) => {
        this.info = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public agregarAEdit(info: Info): void {
    console.log(info);
    this.editInfo = info;
  }

  public onEditInfo(info: Info): void {
    this.heroService.updateInfo(info).subscribe({
      next: (response: Info) => {
        console.log(response);
        this.getInfo();
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
