import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
  standalone: false,

})
export class RegistroUserPage {
  
  nombre: string = '';
  fechaNacimiento: string = '';
  correo: string = '';
  password: string = '';
  confirmPassword: string = '';
  telefono: string = '';
  carrera: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: 'Usuario registrado correctamente',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Redirigir al login después de presionar OK
            this.router.navigate(['/inicio']);
          }
        }
      ]
    });

    await alert.present();
  }
}