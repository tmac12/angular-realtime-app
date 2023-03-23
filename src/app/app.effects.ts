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

  // loadMaintenances$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(signalrHubUnstarted),
  //     map((hub) => AppActions.appStarted())
  //   );
  // });

  appStarted$ = createEffect(() =>
    this.store.pipe(
      select(selectAreAllHubsConnected),
      filter((areAllHubsConnected) => !!areAllHubsConnected),
      first(),
      map((_) => AppActions.appStarted()) // TODO : create a custom action when hubs are connected
    )
  );
}

//per ngRxSignalR è necessario definire l'interfaccia di uno state.
//questa è presa da node_modules/ngrx-signalr-core/lib/selector.dts
export interface RootState {
  signalr: BaseSignalRStoreState;
}
