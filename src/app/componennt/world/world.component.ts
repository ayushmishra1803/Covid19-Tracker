import { Globaldata } from './../../interface/globaldata/globaldata';
import { DataService } from './../../service/dataservice/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent implements OnInit {
  constructor(private data: DataService) {}

  piedata = [];

  pieCountry: string[] = [];

  totalactive = 0;
  totalconforimed = 0;
  totalrecovered = 0;
  totaldeaths = 0;
  globaldata: Globaldata[];
  Arraycolor: string[] = [];
  ArraybgColor: string[] = [];
  barchartdata: number[] = [];
  barchartlabels: string[] = [];
  ngOnInit(): void {
    this.data.getglobaldata().subscribe((re) => {
      if (re) {
        re.forEach((cs) => {
          if (cs.confiremed > 50000) {
            this.barchartdata.push(cs.confiremed);
            this.barchartlabels.push(cs.country);
          }
        });
      }
    });
    this.data.getglobaldata().subscribe({
      next: (result) => {
        console.log(result);
        this.globaldata = result;
        result.forEach((ss) => {
          if (!Number.isNaN(ss.confiremed)) {
            this.totalactive += ss.active;
            this.totalconforimed += ss.confiremed;
            this.totaldeaths += ss.deaths;
            this.totalrecovered += ss.recovered;
          }
        });
      },
    });
    this.data.getglobaldata().subscribe((re) => {
      if (re) {
        re.forEach((cs) => {
          this.piedata.push([cs.country, cs.confiremed]);

          let color = this.getRandomColor();
          this.Arraycolor.push(color);
          let bgcolor = this.getRandomColor();
          this.ArraybgColor.push(bgcolor);
        });
      }
    });
  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  bartype = 'ComboChart';
  title = 'Countries & Cases';
  type = 'PieChart';
  datac = [this.piedata];
  columnNames = ['Contries', 'Cases'];
  options = { Country: 'Cases' };
  width = 350;
  height = 350;
}
