import { Component, Input, Output } from '@angular/core';


export interface ObjetoPerro {

  nombre: string;
  raza:string;
  edad: number;
}

@Component({
  imports: [],
  selector: 'app-listadoperros',
  styleUrl: './listadoperros.css',
  templateUrl: './listadoperros.html',
})
export class ListadoperrosComponent {

  @Input() perro!: ObjetoPerro;

  
}
