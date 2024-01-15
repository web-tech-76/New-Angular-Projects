import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {LoginComponent} from "./components/login/login.component";
import {ChangepasswordComponent} from "./components/login/changepassword/changepassword.component";
import {CricketComponent} from "./components/cricket/cricket.component";
import {TeamsComponent} from "./components/cricket/teams/teams.component";
import {DetailsComponent} from "./components/cricket/teams/details/details.component";
import {PlayersComponent} from "./components/cricket/teams/players/players.component";
import {EditTeamComponent} from "./components/cricket/teams/edit-team/edit-team.component";
import {MatchesComponent} from "./components/cricket/matches/matches.component";
import {ExamComponent} from "./components/exam/exam.component";
import {TicketBookingComponent} from "./components/ticket-booking/ticket-booking.component";

export const routes: Routes = [
  {
    path: "", component: HomeComponent, title: "home"
  },
  {
    path: "Home", redirectTo: "Login", title: "home"
  },
  {
    path: "Users", component: UsersComponent, title: "users"
  },
  {
    path: "Login", component: LoginComponent, title: "login"
  },
  {
    path: "ChangePassword", component: ChangepasswordComponent, title: "change password"
  },
  {
    path: "Cricket", component: CricketComponent, title: "cricket"
  },
  {
    path: "Team", component: TeamsComponent, title: "teams",
    children: [{
      path: ":id", component: DetailsComponent
    }]
  },
  // {
  //   path: "Team/:teamId", component: DetailsComponent
  // },
  {
    path: "Players/:id", component: PlayersComponent, title: "players"
  },
  {
    path: "EditTeam", component: EditTeamComponent, title: "edit Team"
  },
  {
    path: "Matches", component: MatchesComponent, title: "matches"
  },
  {
    path: "Exam", component: ExamComponent, title: "Exam"
  },
  {
    path: "Tickets", component: TicketBookingComponent, title: "ticket-bookings"
  },

];
