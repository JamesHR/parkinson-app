/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable curly */
import { Component, Input, OnInit, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { getRandomNumber } from '../../../utilities/random-id';
import { Chart, registerables } from 'chart.js';

const chartSetup = {labels: [], datasets: []};
const chartOptions = {maintainAspectRatio: false};
interface Dataset {
  name: string;
  data: number[];
  color?: string;
}

class GroupData {
  private label: string;
  private data: number[];
  private borderColor: string;
  private backgroundColor: string;

  constructor(data: Dataset){
    this.label = data.name;
    this.data = data.data;
    this.borderColor = data.color;
    this.backgroundColor = data.color;
  }
}
@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss'],
})
export class CardChartComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() title: string;
  @Input() filter: string;
  @Input() type: 'bar' | 'line' = 'bar';
  @Input() labels: any[] = [];
  @Input() dataset: Dataset[];

  protected uuidContainer = getRandomNumber();
  private uuidChart =  `${new Date().toISOString()}_chart`;
  private chart: Chart;

  constructor() {}

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
    canvas.setAttribute('class', 'chart');
    container.appendChild(canvas);
  }

  private buildChart() {
		this.chart = new Chart(this.uuidChart, {type: this.type, data: chartSetup, options: chartOptions});
		this.setChartData();
		this.labelChartUpdate();
	}

  private setChartData() {
    chartSetup.datasets = [];
    chartSetup.labels = this.labels;

    this.dataset.forEach(item => chartSetup.datasets.push(new GroupData(item)));
  }

	@HostListener('window:resize', ['$event'])
	private labelChartUpdate() {
    this.chart.options.plugins['legend'].position = 'bottom';
		this.chart.resize();
		this.chart.update();
	}
}
