import {DestroyRef, inject, Injectable, signal} from "@angular/core";
import {Player} from "../model/cricket/teams/players.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {HttpClient} from "@angular/common/http";
import {responseObject} from "../type/responseObject.type";


@Injectable({
  providedIn: "root"
})
export class PlayersService {

  players = signal<Player[]>([]);
  http = inject(HttpClient);
  arrPlayers: Player[] = [];
  destroyRef$ = inject(DestroyRef);

  constructor() {
  }


  getPlayersByTeamId(teamId: string): Player [] {
    let player: Player;
    this
      .http
      .get<responseObject<Player>>("http://localhost:8080/players/"+teamId)
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe((serverResponse: responseObject<Player>) => {
        for (player of serverResponse.result) {
          player.playerId = player._id;
          this.arrPlayers.push(player);
        }
          this.players.set(this.arrPlayers);
      });

    //const players = this.arrPlayers.filter((player: Player) => player.teamId == teamId);
    return this.arrPlayers;
  }

}
