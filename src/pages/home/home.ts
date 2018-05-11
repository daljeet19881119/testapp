import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VerifynumberPage } from '../verifynumber/verifynumber';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // gotoVerifyPage
  gotoVerifyPage() {
    this.navCtrl.push(VerifynumberPage);
  }

}
