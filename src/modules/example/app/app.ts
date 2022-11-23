import { LightningElement } from 'lwc';

export default class HelloWorldApp extends LightningElement {
  init() {
    console.log(this.template.querySelector('example-editor'))
  }
}
