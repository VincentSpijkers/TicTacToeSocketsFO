import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Room} from "../modules/lobby/Room";
import {map, Observable} from "rxjs";
import {Player} from "../modules/game-board/Player";
import {Move} from "../modules/game-board/Move";

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  constructor(private socket: Socket) {
  }

  public joinRoom(roomId: Observable<number> | undefined): void {
    this.socket.emit("onRoom", roomId);
  }

  public getOnRoom(): Observable<any> {
    return  this.socket.fromEvent("onRoom").pipe(map((data: any) => data));
  }

  public getPlayer(): Observable<Player> {
    return  this.socket.fromEvent("player").pipe(map((player: any) => player));
  }

  public getPlayingField(): Observable<any>{
    return  this.socket.fromEvent("gameboard").pipe(map((data: any) => data));
  }

  public placeAMove(move: Move): void {
    this.socket.emit("placeAMove", move)
  }

  public tooManyPlayersException(): Observable<any> {
    return this.socket.fromEvent('tooManyPlayers').pipe(map((data: any) => data));
  }
}
