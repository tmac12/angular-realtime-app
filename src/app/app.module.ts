import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedsComponent } from './feeds/feeds.component';
import { AppStateModule } from 'src/libs/main/state/app-state.module';

@NgModule({
  declarations: [AppComponent, FeedsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      name: 'ngrx-signalr-core Samples - Realtime Feed',
    }),
    AppStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
