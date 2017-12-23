import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

declare var $:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform
  ) {}

  ionViewDidLoad() {
    $("#flipbook").turn({
      width: '100%',
      height: this.platform.height() - 50,
      display: 'single',
      autoCenter: true
    });
  }
}
