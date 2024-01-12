import {Component, inject, Input, OnInit} from '@angular/core';
import {Team} from "../../../../model/cricket/teams/team.model";
import {PlayersService} from "../../../../services/players.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../../../../model/cricket/teams/players.model";

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {

  playerService = inject(PlayersService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  players = this.playerService.players;
  teamId = '';
  playersOfTeam: Player[] =[];

  ngOnInit(): void {
    this.teamId = this.activeRoute.snapshot.params['id'];
    console.log(this.teamId);
    this.playersOfTeam = this.playerService.getPlayersByTeamId(this.teamId);
   // console.log(this.playersOfTeam);
  }
}
