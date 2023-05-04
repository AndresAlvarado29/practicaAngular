import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  standalone:true,
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
@Input() name ="Andres" //el input lo convierte en una variable de entrada
@Output() cambioValor= new EventEmitter<number>();
g=10;
cambio(){
  this.cambioValor.emit(this.g);
}


  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
