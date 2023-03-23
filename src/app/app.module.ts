import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SignalREffects, signalrReducer } from 'ngrx-signalr-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { FeedsComponent } from './feeds/feeds.component';

@NgModule({
  declarations: [AppComponent, FeedsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      signalr: signalrReducer,
    }),
    EffectsModule.forRoot([SignalREffects, AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'ngrx-signalr-core Samples - Realtime Feed',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
