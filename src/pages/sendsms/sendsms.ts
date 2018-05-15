import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-sendsms',
  templateUrl: 'sendsms.html',
})
export class SendsmsPage {

  phoneNumber: number;
  textMessage: string;

  constructor(private toast: ToastController ,public navCtrl: NavController, public navParams: NavParams,private sms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendsmsPage');
  }

  // async sendTextMessage() {
  //   this.sms.send('917018937345','message').then((result) => {
  //     console.log(result);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  async sendTextMessage() {
    try {
      let options: {
        replaceLineBreaks: true,
        android: {
          intent: 'INTENT'
        }
      }
      await this.sms.send(String(this.phoneNumber),this.textMessage,options);
      const toast = this.toast.create({
        message: 'Text was sent',
        duration: 3000
      });
      toast.present();
    } 
    catch (error) {
      console.log(error);
      const toast = this.toast.create({
        message: 'Text was not sent',
        duration: 3000
      });
      toast.present();
    }
    
  }
}
