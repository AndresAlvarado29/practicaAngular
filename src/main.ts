import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';


@Component({
  selector: 'my-App',
  standalone: true,
  imports: [CommonModule, FormsModule,PrimerComponenteComponent],
  templateUrl: `main.html`,
  styleUrls: [`main.css`],
})
export class App {
  name = 'Andres Alvarado';
  cargo = 'Estudiante';

  a = 0;
  b = 0;
  c = 0;
  cal=0;
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
  residuo() {
    console.log('hola Ups', this.contador);
    this.contador = this.contador + 1;
    this.c= this.a%this.b
  }
  n1(){
    this.cal=1
    
  }
  n2(){
  
  }

}
bootstrapApplication(App);
