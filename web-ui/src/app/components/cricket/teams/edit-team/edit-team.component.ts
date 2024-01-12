import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-edit-team',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-team.component.html',
  styleUrl: './edit-team.component.css'
})
export class EditTeamComponent {

  playerForm: FormGroup = new FormGroup({
    "team": new FormControl(null),
    "playerName": new FormControl(null),
    "speciality": new FormControl("Speciality"),
    "age": new FormControl(null),
    "dob": new FormControl(null),
    "gender": new FormControl("Select Gender"),
    "isCaptain": new FormControl("Is Captain")
  });

  genders = ['Male', 'Female'];
  captainValues = ['Yes', 'No'];
  specialities = ["Batting","Bowling","All-Rounder","Wicket-Keeper"]


  onIsCaptainChange(event: Event) {
    //console.log((event.target as HTMLSelectElement).value);
  }

  onIsGenderChange(event: Event) {
    //console.log((event.target as HTMLSelectElement).value);
  }

  onSubmit(){
    //console.log(this.playerForm);
    console.log(this.playerForm.controls["team"].value);
    console.log(this.playerForm.controls["playerName"].value);
    console.log(this.playerForm.controls["speciality"].value);
    console.log(this.playerForm.controls["age"].value);
    console.log(this.playerForm.controls["dob"].value);
    console.log(this.playerForm.controls["gender"].value);
    console.log(this.playerForm.controls["isCaptain"].value);
  }
}
