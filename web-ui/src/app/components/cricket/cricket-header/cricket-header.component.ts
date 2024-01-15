import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-cricket-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './cricket-header.component.html',
  styleUrl: './cricket-header.component.css'
})
export class CricketHeaderComponent {

}
