import { Component } from '@angular/core';

/**
 * Generated class for the DaljeetSinghComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'daljeet-singh',
  templateUrl: 'daljeet-singh.html'
})
export class DaljeetSinghComponent {

  text: string;

  constructor() {
    console.log('Hello DaljeetSinghComponent Component');
    this.text = 'Hello World';
  }

}
