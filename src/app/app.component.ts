import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private infoCard = {
    nombre: 'Jorge',
    apellido: 'Trigueros Falqué',
    email: 'jorgetriguerosfalque@gmail.com'
  };

  modificar(_nombre, _apellido, _email) {
    this.infoCard = { ...{ nombre: _nombre, apellido: _apellido, email: _email } };
    console.log(this.infoCard);

  }

}
