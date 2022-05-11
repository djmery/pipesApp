import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'María';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['María', 'Laura', 'Pedro', 'Juan', 'Sofía', 'Manuel', 'Tatiana'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'

  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {
    this.nombre = 'Hugo';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue Pipe

  persona = {
    nombre: 'Silvia',
    edad: 45,
    direccion: 'Gijón, Asturias'
  }

  //Json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },

  ]

  //Async Pipe

  // el pipe async se subscribe internamente al observable y cada una de sus emisiones es lo que va a imprimir

  miObservable = interval(2000); // emite 0,1,2,3,

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de promesa');
    }, 3500)
  })

}
