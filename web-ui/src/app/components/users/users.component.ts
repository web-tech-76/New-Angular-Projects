import {Component, inject, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  usersService = inject(UsersService);
  allUsers =this.usersService.users;

  ngOnInit(): void {

  }
}
