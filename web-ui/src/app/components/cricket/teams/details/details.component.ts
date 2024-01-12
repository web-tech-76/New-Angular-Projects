import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {Team} from "../../../../model/cricket/teams/team.model";
import {TeamsService} from "../../../../services/teams.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnDestroy {

  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  teamService = inject(TeamsService);

  paramSubscription: Subscription | any;
  teamId = '';
  team: Team ;

  constructor() {
    this.team = new Team("", "", "", 0, new Date());
  }

  ngOnInit(): void {

    this.teamId = this.activeRoute.snapshot.params['id'];
    //console.log(this.teamId);

    this.paramSubscription = this.activeRoute
      .params.subscribe((params:Params) => {
        this.teamId = params['id'];
        this.team = this.teamService.getTeam(this.teamId);
      });
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }

}
