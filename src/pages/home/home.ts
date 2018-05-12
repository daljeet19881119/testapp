import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VerifynumberPage } from '../verifynumber/verifynumber';
import { SendsmsPage } from '../sendsms/sendsms';

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

  // gotoSendsmsPage
  gotoSendsmsPage() {
    this.navCtrl.push(SendsmsPage);
  }

}
