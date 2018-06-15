// NG2
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, AnimationKeyframe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
let HighCharts: any;
import * as SolidGauge from 'highcharts/modules/solid-gauge';
import * as ChartModuleMore from 'highcharts-more';
import * as Highcharts from 'highcharts';
ChartModuleMore(Highcharts);
SolidGauge(Highcharts);
// Vendor
// APP
HighCharts = Highcharts;
const gaugeOptions = {
  chart: {
    type: 'solidgauge',
  },

  title: null,

  pane: {
    center: ['50%', '50%'],
    size: '100%',
    startAngle: 0,
    endAngle: 360,
    background: {
      backgroundColor: '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc',
    },
  },

  tooltip: {
    enabled: false,
  },

  // the value axis
  yAxis: {
    stops: [
      [0.3, '#DA4453'], // red
      [0.6, '#F6B042'], // yellow
      [0.8, '#8CC152'], // green
    ],
    lineWidth: 0,
    minorTickInterval: null,
    tickPixelInterval: 400,
    tickWidth: 0,
    title: {
      y: -70,
    },
    labels: {
      enabled: false,
    },
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: -20,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
};

@Component({
  selector: 'platform-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, AfterViewInit {
  @ViewChild('chartTarget') chartTarget: ElementRef;

  entityId;
  probability: number;
  probabilitySubscription: any;
  confidence = 87;
  chart: Highcharts.ChartObject;
  isUp: boolean;
  delta: number;
  isDown: boolean;
  isNeutral: boolean;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const url = 'https://panda-ml-demo.herokuapp.com/placement/';
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.entityId = params.EntityID;
      this.probabilitySubscription = this.http.get(url + this.entityId);
    });
  }
  ngAfterViewInit() {
    this.probabilitySubscription.subscribe((response: any) => {
      this.probability = Math.round(response.probability * 100);
      this.confidence = Math.round(response.confidence);
      this.delta = response.delta * 100;
      this.isUp = response.isUp;
      this.isDown = response.isDown;
      this.isNeutral = response.isNeutral;
      const options: any = HighCharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
        },

        credits: {
          enabled: false,
        },

        series: [
          {
            name: 'Rating',
            data: [this.probability],
            dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color: black' + '">{y}%</span><br/>' + '</div>',
            },
            tooltip: {
              valueSuffix: ' km/h',
            },
          },
        ],
      });
      this.chart = Highcharts.chart(this.chartTarget.nativeElement, options);
    });
  }
}
