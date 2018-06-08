import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { VerifynumberPage } from '../verifynumber/verifynumber';
import { SendsmsPage } from '../sendsms/sendsms';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DomSanitizer } from '@angular/platform-browser'
import { YtvideoPage } from '../ytvideo/ytvideo';
import { AndroidPermissions } from '@ionic-native/android-permissions';
declare var SMS:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  youtubeUrl: string = 'https://www.youtube.com/embed/iJr16_Wwcqg';

  messages:any=[];

  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation, private dom: DomSanitizer, private modalCtrl: ModalController, public platform: Platform, public androidPermissions: AndroidPermissions) {
   
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

    // call function
    this.checkPermission();
  }

  checkPermission()
  {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(success => {                
        //if permission granted
        this.ReadSMSList();
      },
        err => {              
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).then(success => {
            this.ReadSMSList();
        },
        err => {
          alert("cancelled")
        });
      });
            
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);   
  }

  ReadSMSList()
  {
      
      this.platform.ready().then((readySource) => {
      
      let filter = {
        box : 'inbox', // 'inbox' (default), 'sent', 'draft'
        indexFrom : 0, // start from index 0
        maxCount : 20, // count of SMS to return each time
      };
      
      if(SMS) SMS.listSMS(filter, (ListSms)=>{               
          this.messages=ListSms
      },      
        Error=>{
          alert(JSON.stringify(Error))
        });       
      });
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
