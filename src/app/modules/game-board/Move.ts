import {Player} from "./Player";
import {Position} from "./Position";

export class Move {
  public position: Position;
  public player?: Player;

  constructor(x: number, y: number, player: Player | undefined) {
    this.position = new Position(x, y);
    this.player = player;
  }
}
