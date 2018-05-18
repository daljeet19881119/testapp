import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { HomePage } from '../home/home';

/**
 * Generated class for the YtvideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ytvideo',
  templateUrl: 'ytvideo.html',
})
export class YtvideoPage {

  videoUrl: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YtvideoPage');

    // get videoUrl
    this.videoUrl = this.navParams.get('videoUrl');
  }

  // closeModal
  closeModal() {
    this.viewCtrl.dismiss(HomePage);
  }

  // getVideoUrl
  getVideoUrl() {
    return this.dom.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
