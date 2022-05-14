import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Room} from "../Room";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public isModalActive = false;
  public room?: Room;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  public createLobby(): void {
    this.apiService.getNewLobbyId().subscribe((room: Room) => {
      this.room = room;
      this.showModal();
    })
  }

  public startGame(): void {
    this.router.navigate([`/gameboard/${this.room?.id}`], );
  }

  private showModal(): void {
    this.isModalActive = true;
  }

}
