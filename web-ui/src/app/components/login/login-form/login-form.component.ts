import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
    imports: [
        FormsModule,
        RouterLink
    ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  isNewUser = false;
  router = inject(Router);
  @Output() onRegisterEvent = new EventEmitter();

  onSubmit(frm: NgForm) {
  }

  onRegister() {
    this.isNewUser = !this.isNewUser;
    this.onRegisterEvent.emit(this.isNewUser);
    //console.log(this.isNewUser);
    this.router.navigate(['Login']);
  }

}
