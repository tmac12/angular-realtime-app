import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
  selectAreAllHubsConnected,
  signalrHubUnstarted,
  startSignalRHub,
} from 'ngrx-signalr-core';
import { filter, first, map } from 'rxjs';

import * as AppActions from '../../../app/app.actions';
import { feedHub } from '../../../app/hubs';
import { RootState } from './app.facade';

@Injectable()
export class AppEffects {
  //Store required type "RootState"
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
