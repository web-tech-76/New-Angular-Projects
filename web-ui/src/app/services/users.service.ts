import {Injectable, signal} from "@angular/core";
import {Users} from "../model/users.model";

@Injectable({providedIn: "root"})
export class UsersService {

  users = signal<Users []>([]);

  constructor() {

    let u1 = new Users('100', 'name1');
    let u2 = new Users('200', 'name2');

    this.users.set([u1, u2]);

  }


}
