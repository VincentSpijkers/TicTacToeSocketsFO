import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameBoardModule} from "./modules/game-board/game-board.module";
import {LobbyModule} from "./modules/lobby/lobby.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./modules/shared/shared.module";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {environment} from "../environments/environment";

const config: SocketIoConfig = {
  url: environment.socketUrl, // socket server url;
  options: {
    transports: ['websocket']
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameBoardModule,
    LobbyModule,
    SharedModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  exports: [GameBoardModule, LobbyModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
