import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { VerifynumberPage } from '../verifynumber/verifynumber';
import { SendsmsPage } from '../sendsms/sendsms';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DomSanitizer } from '@angular/platform-browser'
import { YtvideoPage } from '../ytvideo/ytvideo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  youtubeUrl: string = 'https://www.youtube.com/embed/iJr16_Wwcqg';

  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation, private dom: DomSanitizer, private modalCtrl: ModalController) {
   
    // detect orientation changes
    this.screenOrientation.onChange().subscribe(
      () => {

          // check if screen is in landscape
          if(this.screenOrientation.type == 'landscape-primary' || this.screenOrientation.type == 'landscape-secondary ')
          {

            let viewModal = this.modalCtrl.create(YtvideoPage, {videoUrl: this.youtubeUrl});
            viewModal.present();
          }
      }
    );
  }

  // gotoVerifyPage
  gotoVerifyPage() {
    this.navCtrl.push(VerifynumberPage);
  }

  // gotoSendsmsPage
  gotoSendsmsPage() {
    this.navCtrl.push(SendsmsPage);
  }

  // getYoutubeUrl
  getYoutubeUrl() {
    return this.dom.bypassSecurityTrustResourceUrl(this.youtubeUrl);
  }
}
