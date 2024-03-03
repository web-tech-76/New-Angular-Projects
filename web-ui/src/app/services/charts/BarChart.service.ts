import {Chart, registerables} from "chart.js";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn :'root'
})
export class BarChartService {

  constructor() {
    Chart.register(...registerables);
  }

  createChart(name : string ): Chart | any {
    return new Chart(name, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
