import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Declara e inicializa la propiedad currentYear aquí
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    console.log('Componente Home inicializado!');
  }

  onLoginClick(): void {
    console.log('Botón Login presionado');
    // Lógica para redirigir al login o abrir un modal, etc.
  }

  onRegisterClick(): void {
    console.log('Botón Register presionado');
    // Lógica para redirigir al registro.
  }

}