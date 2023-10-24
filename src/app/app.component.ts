import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  step: 'start' | 'gps' | 'notification' | 'camera' = 'start';

  constructor() {}

  changeStep(e: any) {
    console.log('show me the event', e);
    switch(e) {
      case 0:
        this.step = 'start';
      break;
      case 1:
        this.step = 'gps';
      break;
      case 2:
        this.step = 'notification';
      break;
      case 3:
        this.step = 'camera';
      break;
      default:
        console.log('Step não catalogado');
      break;
    }
  }
}
