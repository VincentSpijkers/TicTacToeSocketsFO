import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Room} from "../modules/lobby/Room";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  constructor(private socket: Socket) {
  }

  public joinRoom(roomId: Observable<number> | undefined): void {
    this.socket.emit("onRoom", roomId);
    this.socket.fromEvent("onRoom").subscribe((data: any) => console.log(data))
  }
}
