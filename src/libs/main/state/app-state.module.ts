import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SignalREffects, signalrReducer } from 'ngrx-signalr-core';
import { AppEffects } from './app.effects';
import { AppFacade } from './app.facade';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ signalr: signalrReducer }),
    EffectsModule.forRoot([SignalREffects, AppEffects]),
  ],
  providers: [AppFacade],
})
export class AppStateModule {}
