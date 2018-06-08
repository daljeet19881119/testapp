import { Component } from '@angular/core';

/**
 * Generated class for the DaljeetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'daljeet',
  templateUrl: 'daljeet.html'
})
export class DaljeetComponent {

  text: string;

  constructor() {
    console.log('Hello DaljeetComponent Component');
    this.text = 'Hello World';
  }

}
