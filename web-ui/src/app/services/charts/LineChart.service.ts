import {Chart, registerables} from "chart.js";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LineChartService {


  constructor() {
    Chart.register(...registerables);
  }

  createNewChart(name: string): Chart | any {
    return new Chart(name, {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [
          {
            label: "India",
            data: ['10', '12', '20', '10', '4', '12', '10', '9', '3', '10'],
            backgroundColor: 'blue'
          },
          {
            label: "Aus",
            data: ['6', '7', '10', '4', '10', '8', '5', '11', '5', '2'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Overs'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Runs'
            }

          }
      }
    }});
  }


  }
