import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-ionic-storage',
  templateUrl: 'ionic-storage.html',
})
export class IonicStoragePage {

  items: any = [];
  key: string = 'posts';
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonicStoragePage');
  }

  getData() {
    this.http.get(this.url).map(res => res.json()).subscribe(result => {
      this.items = result;
    });
  }

  saveData() {
    this.storage.set(this.key, JSON.stringify(this.items));
  }

  loadData() {
    this.storage.get(this.key).then((val) => {

      if(val != null && val != undefined)
      {
        this.items = JSON.parse(val);
      }
    })
  }
}
