import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-App',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `main.html`,
  styleUrls: [`main.css`],
})
export class App {
  name = 'Andres Alvarado';
  cargo = 'Estudiante';

  a = 0;
  b = 0;
  c = 0;
  contador = 0;

  suma() {
    console.log('hola Ups', this.contador);
    this.contador = this.contador + 1;
    this.c= Number(this.a)+Number(this.b)
  }
  resta() {
    console.log('hola Ups', this.contador);
    this.contador = this.contador + 1;
    this.c= this.a-this.b   
  }
  multiplicacion() {
    console.log('hola Ups', this.contador);
    this.contador = this.contador + 1;
    this.c= this.a*this.b
  }
  division() {
    console.log('hola Ups', this.contador);
    this.contador = this.contador + 1;
    this.c= this.a/this.b
  }

}
bootstrapApplication(App);
