import { Component, OnInit } from '@angular/core';
import {SocketsService} from "../../../services/sockets.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  public roomId?: Observable<number>;

  constructor(private socketService: SocketsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRoomIdFromRouteParams();
    this.connectToRoom();
  }

  private getRoomIdFromRouteParams(): void {
    this.route.params.subscribe((params) =>{
      this.roomId = params['id'];
    })
  }

  private connectToRoom(): void {
    this.socketService.joinRoom(this.roomId)
  }

}
