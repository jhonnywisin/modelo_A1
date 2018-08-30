import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { JuegosPage } from './../juegos/juegos';
import { EstadisticasPage } from './../estadisticas/estadisticas';
import { CodigoPage } from './../codigo/codigo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  login(){
    this.navCtrl.push(LoginPage);
  }

  juegos(){
    this.navCtrl.push(JuegosPage);
  }

  codigo(){
    this.navCtrl.push(CodigoPage);
  }

  estadistica(){
    this.navCtrl.push(EstadisticasPage);
  }
}
