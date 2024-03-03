import {Component, inject, OnInit} from '@angular/core';
import {BarChartService} from "../../services/charts/BarChart.service";
import {LineChartService} from "../../services/charts/LineChart.service";

@Component({
  selector: 'app-first-chart',
  standalone: true,
  imports: [],
  templateUrl: './first-chart.component.html',
  styleUrl: './first-chart.component.css'
})
export class FirstChartComponent implements OnInit {

  myChart1: any | undefined;
  myChart2: any | undefined;

  barChartService = inject(BarChartService);
  lineChartService = inject(LineChartService);


  ngOnInit(): void {
    this.myChart1 = this.barChartService.createChart("myChart1");
    this.myChart2 = this.lineChartService.createNewChart("myChart2");

  }
}





