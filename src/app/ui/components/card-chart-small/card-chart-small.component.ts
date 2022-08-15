/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable curly */
import { AfterViewInit, Component, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { getRandomNumber } from '../../../utilities/random-id';

const chartSetup = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: ['#17bebb', '#f3a712', '#db2b39', '#29335c', '#fad8d6'],
  }]
};

@Component({
  selector: 'app-card-chart-small',
  templateUrl: './card-chart-small.component.html',
  styleUrls: ['./card-chart-small.component.scss'],
})
export class CardChartSmallComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() title: string;
  @Input() labels: string[] = [];
  @Input() dataset: any[];

  protected uuidContainer = getRandomNumber();
  private uuidChart =  `${new Date().toISOString()}_chartSmall`;
  private chart: Chart;

  constructor() { }

  ngOnInit() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.buildCanvas();
    this.buildChart();
  }

  ngOnDestroy() {
    this.chart.destroy();
  }

  private buildCanvas() {
    const container = document.getElementById(this.uuidContainer.toString());
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', this.uuidChart);
    container.appendChild(canvas);
  }

  private buildChart() {
		if (this.chart) this.chart.destroy();

		this.chart = new Chart(this.uuidChart, {
			type: 'doughnut',
			data: chartSetup,
			options: { maintainAspectRatio: false },
		});

		this.setChartData();
		this.labelChartUpdate();
	}

  private setChartData() {
		chartSetup.datasets[0].data = this.dataset;
    chartSetup.labels = this.labels;
  }

	@HostListener('window:resize', ['$event'])
	private labelChartUpdate() {
    this.chart.options.plugins['legend'].position = 'bottom';
		this.chart.resize();
		this.chart.update();
	}

}
