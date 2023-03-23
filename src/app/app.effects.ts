import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
  BaseSignalRStoreState,
  selectAreAllHubsConnected,
  signalrHubUnstarted,
  startSignalRHub,
} from 'ngrx-signalr-core';
import { filter, first, map, of } from 'rxjs';

import * as AppActions from './app.actions';
import { feedHub } from './hubs';

@Injectable()
export class AppEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<RootState>
  ) {}

  initRealtime$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signalrHubUnstarted),
      map((hub) => {
        console.log('signalr hub unstarted');
        return startSignalRHub(feedHub);
      })
    )
  );

  appStarted$ = createEffect(() =>
    this.store.pipe(
      select(selectAreAllHubsConnected),
      filter((areAllHubsConnected) => !!areAllHubsConnected),
      first(),
      map((_) => AppActions.appStarted()) // TODO : create a custom action when hubs are connected
    )
  );
}

//for ngRxSignalR a state interface is needed.
//look at: node_modules/ngrx-signalr-core/lib/selector.dts
export interface RootState {
  signalr: BaseSignalRStoreState;
}
