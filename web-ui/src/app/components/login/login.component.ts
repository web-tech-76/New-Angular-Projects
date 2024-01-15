import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginFormComponent} from "./login-form/login-form.component";
import {LoginSelectComponent} from "./login-select/login-select.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    LoginFormComponent,
    LoginSelectComponent,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Input() isNewUser = false;

  onFormRegister(event: boolean){
    this.isNewUser = event;
   // console.log("this.isNewUser");
    //console.log(this.isNewUser);
  }

}
