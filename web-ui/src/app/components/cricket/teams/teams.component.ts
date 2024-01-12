import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {TeamsService} from "../../../services/teams.service";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnInit {

  router = inject(Router);
  teamsService = inject(TeamsService);
  activeRoute = inject(ActivatedRoute);

  teams = this.teamsService.teams;

  onCreateTeam() {
    this.router.navigate(["/EditTeam"]);
  }

  ngOnInit(): void {
    let id = null;
    if (id == null && this.teams !== null) {
      id = this.teams()[0].teamId;
      this.router.navigate([id], {relativeTo: this.activeRoute});
    }

  }

  onSelectTeam(teamId: string) {
    this.router.navigate([teamId], {relativeTo: this.activeRoute});
  }
}
