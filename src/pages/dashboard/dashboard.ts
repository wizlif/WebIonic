import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DashboardProvider} from "../../providers/dashboard/dashboard";
import { Chart } from 'chart.js';
import {GlobalProvider} from "../../providers/global/global";
import {LoginPage} from "../login/login";
@IonicPage({
  name:'dashboard',
  segment:'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers:[DashboardProvider]
})
export class DashboardPage implements OnInit{

  cash=0;
  accStat;
  enquiries=0;
  ordersNo;

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('donutCanvas') donutCanvas;
  @ViewChild('pieCanvas') pieCanvas;

  barChart: any;
  lineChart:any;
  donutChart:any;
  pieChart:any;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public globals:GlobalProvider,
              public dashProvider: DashboardProvider) {
  }

  ngOnInit(): void {
    this.dashProvider.getFarmers()
      .subscribe(stat=>this.accStat=stat
    ,err => console.log(err));

    this.dashProvider.getPayments()
      .subscribe(cash=>this.cash=cash.payments
        ,err => console.log(err));

    this.dashProvider.getEnquiries()
      .subscribe(enq=>this.enquiries=enq
        ,err => console.log(err));

    this.dashProvider.getNewOrdersNo()
      .subscribe(orderNo=>this.ordersNo=orderNo
        ,err => console.log(err));

    this.dashProvider.getOrdersChart().subscribe(ordersChart=> {
      this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
          labels: this.globals.months,
          datasets: [
            {
              label: "Complete",
              backgroundColor: 'rgba(63, 255, 0, 1)',
              data: ordersChart.complete
            },
            {
              label: "Pending",
              backgroundColor: 'rgba(255, 216,0, 1)',
              data: ordersChart.pending
            },
            {
              label: "Canceled",
              backgroundColor: 'rgba(255, 0, 0, 1)',
              data: ordersChart.cancelled
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                fontColor: "#fff",
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: "#fff"
              }
            }]
          },
        responsive: true
        }

      });
    },err=>console.log(err));

    this.dashProvider.getSubscribersChart().subscribe(subscribersChart=> {
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
          labels: this.globals.months,
          datasets: [
            {
              label: "Farmers",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: subscribersChart.farmers,
              spanGaps: false,
            },
            {
              label: "Village Agents",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(142, 68, 173,0.4)",
              borderColor: "rgba(142, 68, 173,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: subscribersChart.vas,
              spanGaps: false,
            }
          ]
        }

      });
    },err=>console.log(err));

    this.dashProvider.getInputsChart().subscribe(inputsChart=> {
      this.donutChart = new Chart(this.donutCanvas.nativeElement,{
        type: 'doughnut',
        data: {
          labels: ["Herbicides", "Seed", "Fertilizers", "Pesticide", "Tools", "Others"],
          datasets: [{
            label: '# of inputs',
            data: inputsChart,
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)'
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
        }
      });
    },err=>console.log(err));

    this.dashProvider.getOrdersPortionChart().subscribe(ordersPChart=> {
      this.pieChart = new Chart(this.pieCanvas.nativeElement,{
        type: 'pie',
        data: {
          labels: ["Complete", "Cancelled", "Pending"],
          datasets: [{
            label: '# of Orders',
            data: ordersPChart,
            backgroundColor: [
              '#2ecc71',
              '#e74c3c',
              '#f1c40f',
            ],
            hoverBackgroundColor: [
              "rgba(39, 174, 96, 1)",
              "rgba(192, 57, 43, 1)",
              "rgba(211, 84, 0, 1)",
            ]
          }]
        }
      });
    },err=>console.log(err));

  }

  root(page):void{
    this.navCtrl.setRoot(page);
  }
}
