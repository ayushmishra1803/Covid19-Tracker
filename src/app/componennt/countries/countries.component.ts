import { Globaldata } from './../../interface/globaldata/globaldata';
import { DataService } from './../../service/dataservice/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  contries: string[] = [];
  input;
  datasummary: Globaldata[];
  totalactive = 0;
  totalconforimed = 0;
  totalrecovered = 0;
  totaldeaths = 0;
  selectedcountry;
  chartdata = [];
  chartlabel: string[] = [];
  finaldate: string[] = [];

  constructor(private data: DataService, private datepipe: DatePipe) {}
  datewisedata;
  ngOnInit(): void {
    this.data.getdatewisedata().subscribe((re) => {
      this.datewisedata = re;
      console.log(re);
      this.udpdateChart();
      console.log(this.datewisedata);
    });

    this.data.getglobaldata().subscribe((result) => {
      if (result) {
        this.datasummary = result;
        this.datasummary.forEach((cd) => {
          this.contries.push(cd.country);
        });
      }
    });
  }

  update(input: NgForm) {
    this.input = input.value.country;

    this.datasummary.forEach((cs) => {
      if (cs.country === input.value.country) {
        this.totalactive = cs.active;
        this.totalconforimed = cs.confiremed;
        this.totaldeaths = cs.deaths;
        this.totalrecovered = cs.recovered;
      }
    });
    this.selectedcountry = this.datewisedata[this.input];

    this.selectedcountry.forEach((element) => {
      this.chartdata.push([+element.case, element.date]);
      console.log(this.input);
    });
    this.udpdateChart();
  }
  udpdateChart() {
    let datatable = [];
    let datalabe=[];
    this.selectedcountry.forEach((element) => {
      datatable.push(element.case);
      datalabe.push(this.datepipe.transform(element.date,"dd/MM/yyy"));
      console.log(datatable);

      this.lineChartData=[{
        data:[...datatable],
        label:'Cases'
      }]
  this.lineChartLabels = [...datalabe];
    });

  }

  public lineChartData: ChartDataSets[] = [
    { data: [], label: '' },

  ];
  public lineChartLabels: Label[] = []
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(247, 9, 149 )',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
}
