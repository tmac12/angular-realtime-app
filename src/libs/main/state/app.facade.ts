import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  BaseSignalRStoreState,
  createSignalRHub,
  selectAreAllHubsConnected,
} from 'ngrx-signalr-core';
import { feedHub } from 'src/app/hubs';

@Injectable()
export class AppFacade {
  areAllHubsConnected$ = this.store.select(selectAreAllHubsConnected);

  //TODO: hubDefinition should be a singleton instance passed to dependencies injection
  constructor(private store: Store<RootState>) {}

  public createNgRxSignalR() {
    this.store.dispatch(createSignalRHub(feedHub));
  }
}

//for ngRxSignalR a state interface is needed.
//look at: node_modules/ngrx-signalr-core/lib/selector.dts
export interface RootState {
  signalr: BaseSignalRStoreState;
}
