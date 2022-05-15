import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Room} from "../Room";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {

  public isJoinRoomModalActive = false;
  public room?: Room;

  constructor(private apiService: ApiService, private router: Router) { }


  public createLobby(): void {
    this.apiService.getNewLobbyId().subscribe((room: Room) => {
      this.room = room;
      this.navigateToGameRoom(room.id)
    })
  }

  public joinLobby(): void {
    this.isJoinRoomModalActive = true;
  }

  public joinGame(roomId: string): void {
    this.navigateToGameRoom(parseInt(roomId));
  }

  private navigateToGameRoom(roomId: number | undefined){
    this.router.navigate([`/gameboard/${roomId}`], );
  }

}
