import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-select',
  standalone: true,
  imports: [],
  templateUrl: './login-select.component.html',
  styleUrl: './login-select.component.css'
})
export class LoginSelectComponent implements OnInit {

  radioSelectType = '';
  selectTypes = ['Email', 'Phone', "UserName"];

  @Input() isNewUser = false;

  ngOnInit(): void {

  }

  onClickRadio(value: string) {
    this.radioSelectType = value;
  }

}
