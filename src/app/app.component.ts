import { Component } from '@angular/core';
import { AppFacade } from 'src/libs/main/state/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'realtime-app';

  constructor(public appFacade: AppFacade) {
    this.appFacade.createNgRxSignalR();
  }
}
