import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css'],
})
export class LenguajesComponent implements OnInit {
  lenguajes: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((datos) => {
      console.log(datos);
      this.lenguajes = datos.lenguajes;
    });
  }
}
