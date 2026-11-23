import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,
  FormGroup,
  FormControl,
   ValidationErrors,
    Validators } from '@angular/forms';
import {ObjetoPerro, ListadoperrosComponent} from '../listadoperros/listadoperros';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [CommonModule,
    ReactiveFormsModule,

  ],
  selector: 'app-pista',
  styleUrl: './pista.css',
  templateUrl: './pista.html',
})
export class Pista {

  formulario = new FormGroup({

      nombre: new FormControl('', {

        nonNullable: true,

        validators: [Validators.required, Validators.minLength(2)],
      }),

      raza: new FormControl('', {

        nonNullable: true,

        validators: [Validators.required],
      }),

        edad: new FormControl('', {

        nonNullable: true,

        validators: [Validators.required],
      }
    ),

  }
);

  Perros: ObjetoPerro[] = [];

  agregarObjeto(): void {

    if (this.formulario.invalid) return;

    const perro = this.formulario.getRawValue();

    this.Perros.push();

    this.formulario.reset();
  }
}
