import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { UserinfoPage } from '../pages/userinfo/userinfo';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  uuid: any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: Http, private uniqueDeviceID: UniqueDeviceID) {
    platform.ready().then(() => {
      
      // call func getDeviceID
     this.getDeviceID();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // getDeviceID
  getDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        this.uuid = uuid; 
        // call requestData
        this.requestData();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  // requestData
  requestData() {

    this.http.get('http://ionic.dsl.house/heartAppApi/get-verified-user.php?uuid='+this.uuid).map(res => res.json()).subscribe(data => {
      console.log(data);
      
      

      // check if device uuid mathced to the server uuid
      if(this.uuid == data.data.uuid && data.data.verification == 'verified' && data.data.profile_status == 'verified')
      {
        this.rootPage = DashboardPage;
      }   
        // check if verification==verified and profile status==notVerified
      if(data.data.verification == 'verified' && data.data.profile_status == 'notVerified')
      {
        this.rootPage = UserinfoPage;
      }
      if(data.data.verification == 'notVerified' && data.data.profile_status == 'notVerified'){
        this.rootPage = HomePage;
      }
      
    }, error => {
      console.log(error);
    });
  }
}

