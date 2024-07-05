import { Component } from '@angular/core';
import { IContacto } from '../../interfaces/Contacto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contacto: IContacto = {
    nombre: " ",
    apellido: " ",
    correo: "example@gmail.com",
    mensaje: "Mensaje a enviar",
    asunto: "Recomendacion de libro"
  }
}
