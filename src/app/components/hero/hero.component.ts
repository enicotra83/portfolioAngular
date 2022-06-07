import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio: PortfolioService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      console.log(datos)
      this.miPortfolio = datos; 
    })
  }

}
