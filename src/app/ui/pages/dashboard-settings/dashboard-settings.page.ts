import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.page.html',
  styleUrls: ['./dashboard-settings.page.scss'],
})
export class DashboardSettingsPage implements OnInit {

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Guardar',
      mode: 'ios',
      message: '¿Desea confirmar los cambios realizados?',
      buttons: ['Cancelar', 'Aceptar']
    });

    await alert.present();
  }

}
