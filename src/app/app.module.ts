import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VerifynumberPage } from '../pages/verifynumber/verifynumber';
import { VerifycodePage } from '../pages/verifycode/verifycode';
import { HttpModule } from '@angular/http';
import { SendsmsPage } from '../pages/sendsms/sendsms';
import { SMS } from '@ionic-native/sms';
import { UserinfoPage } from '../pages/userinfo/userinfo';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { LoaderPage } from '../pages/loader/loader';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { YtvideoPage } from '../pages/ytvideo/ytvideo';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VerifynumberPage,
    VerifycodePage,
    SendsmsPage,
    UserinfoPage,
    DashboardPage,
    LoaderPage,
    YtvideoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VerifynumberPage,
    VerifycodePage,
    SendsmsPage,
    UserinfoPage,
    DashboardPage,
    LoaderPage,
    YtvideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    UniqueDeviceID,
    ScreenOrientation,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
