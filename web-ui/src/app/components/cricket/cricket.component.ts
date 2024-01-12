import {Component} from '@angular/core';
import {CricketHeaderComponent} from "./cricket-header/cricket-header.component";

@Component({
  selector: 'app-cricket',
  standalone: true,
  imports: [
    CricketHeaderComponent
  ],
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.css'
})
export class CricketComponent {


}
