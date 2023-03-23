import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { createSignalRHub, selectAreAllHubsConnected } from 'ngrx-signalr-core';
import { RootState } from './app.effects';
import { feedHub } from './hubs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'realtime-app';

  areAllHubsConnected$ = this.store.select(selectAreAllHubsConnected);

  //Store required type "RootState"
  constructor(private store: Store) {
    store.dispatch(createSignalRHub(feedHub));
  }
}
