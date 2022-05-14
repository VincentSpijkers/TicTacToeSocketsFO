import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameBoardComponent} from "./modules/game-board/game-board/game-board.component";
import {LobbyComponent} from "./modules/lobby/lobby/lobby.component";

const routes: Routes = [
  { path: '', redirectTo: 'lobby', pathMatch: 'full' },
  { path: 'gameboard/:id', component: GameBoardComponent },
  { path: 'lobby', component: LobbyComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
