import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {TeamsService} from "../../../services/teams.service";
import {Team} from "../../../model/cricket/teams/team.model";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnInit {

  router = inject(Router);
  teamsService = inject(TeamsService);
  activeRoute = inject(ActivatedRoute);
  teams: Team [] = [];//= this.teamsService.teams;

  constructor() {
    this.teams = this.teamsService.getAll();
  }

  onCreateTeam() {
    this.router.navigate(["/EditTeam"]);
  }

  ngOnInit(): void {
    let id = null;
    if (id == null && this.teams !== null) {
      id = this.teams[0]._id;
      this.router.navigate([id], {relativeTo: this.activeRoute});
    }

  }

  onTeamSelected(index: number) {
    const teamId = this.teams[index].teamId;
    console.log("id at on select ");
    console.log(teamId);
    this.router.navigate([teamId], {relativeTo: this.activeRoute});
  }
}
