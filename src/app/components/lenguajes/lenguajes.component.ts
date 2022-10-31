import { Component, OnInit } from '@angular/core';
import { Lenguaje } from 'src/app/models/lenguaje';
import { LenguajesService } from 'src/app/servicios/lenguajes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css'],
})
export class LenguajesComponent implements OnInit {
  public lenguajes: Lenguaje[] = [];

  constructor(private lenguajesService: LenguajesService) {}

  ngOnInit(): void {
    this.getLenguaje();
  }

  public getLenguaje(): void {
    this.lenguajesService.getLenguaje().subscribe({
      next: (Response: Lenguaje[]) => {
        this.lenguajes = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
