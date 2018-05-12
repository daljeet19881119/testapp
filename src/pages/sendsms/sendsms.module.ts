import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendsmsPage } from './sendsms';

@NgModule({
  declarations: [
    SendsmsPage,
  ],
  imports: [
    IonicPageModule.forChild(SendsmsPage),
  ],
})
export class SendsmsPageModule {}
