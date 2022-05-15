import { Component, OnInit } from '@angular/core';
import {SocketsService} from "../../../services/sockets.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Tile} from "../Tile";
import {Player} from "../Player";
import {Move} from "../Move";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  public roomId?: Observable<number>;
  public ticTacToeGrid!: Tile[][];
  public tooManyPlayerException?: string;
  public player?: Player;

  constructor(private socketService: SocketsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.subscribeToExceptions();
    this.getRoomIdFromRouteParams();
    this.connectToRoom();
    this.getPlayingField();
    this.getPlayer();
  }

  private subscribeToExceptions(): void {
    this.socketService.tooManyPlayersException().subscribe((data) => {
      this.tooManyPlayerException = data;
    });
  }

  private getRoomIdFromRouteParams(): void {
    this.route.params.subscribe((params) =>{
      this.roomId = params['id'];
    })
  }

  private connectToRoom(): void {
    this.socketService.joinRoom(this.roomId)
  }

  public getPlayingField(): void{
    this.socketService.getPlayingField().subscribe((data: any) => {
      this.ticTacToeGrid = data;
    })
  }

  private getPlayer(): void {
   this.socketService.getPlayer().subscribe((player: Player) =>{
     console.log(player)
     this.player = player;
    })
  }

  public placeAMove(x: number, y: number): void{
    let move = new Move(x, y, this.player)
    this.socketService.placeAMove(move);
  }

  public navigateToLobby(): void {
    this.router.navigateByUrl("/")
  }

}
