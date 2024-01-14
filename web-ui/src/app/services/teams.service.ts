import {DestroyRef, inject, Injectable, signal, WritableSignal} from "@angular/core";
import {Team} from "../model/cricket/teams/team.model";
import {HttpClient} from "@angular/common/http";
import {response} from "express";
import {takeUntil} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {responseObject} from "../type/responseObject.type";


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams = signal<Team[]>([]);
  http = inject(HttpClient);
  arrTeams: Team[] = [];
  destroyRef$ = inject(DestroyRef);

  constructor() {
    this
      .http
      .get<responseObject<Team>>("http://localhost:8080/cricket/")
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe((serverResponse: responseObject<Team>) => {
        for (let team of serverResponse.result) {
          team.teamId = team._id;
          this.arrTeams.push(team);
        }
        this.teams.set(this.arrTeams);
      })
  }

  getAll(): Team[] {
    let sliced: Team[] = []
    sliced = this.arrTeams.slice(0, this.arrTeams.length);
    return sliced;
  }

  getTeamNames(): {id: string , name : string}[]{
    let teamNames : {id: string , name : string} [] =[];
    for(const team of this.arrTeams)
    {
      let teamNameObj :{id: string , name : string} ={id:team._id, name:team.teamName};
      teamNames.push(teamNameObj);
    }
    return teamNames;

  }


  getTeam(index: number): Team | undefined {
    let teamAtIndex: Team = new Team("", "", "", "", 0, new Date());
    let sliced: Team[] = []
    sliced = this.arrTeams.slice(0, this.arrTeams.length);

    if (sliced.at(index) !== null) {
      return sliced.at(index);
    } else {
      return teamAtIndex;
    }

  }


  getTeamById(id: string): Team[] {
    let sliced: Team[] = []
    sliced = this.arrTeams.slice(0, this.arrTeams.length);

    return sliced.filter((team) => team._id == id)
  }

}
