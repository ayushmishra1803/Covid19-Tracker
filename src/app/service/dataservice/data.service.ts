import { Datwisedata } from './../../interface/globaldata/datwisedata';
import { Globaldata } from './../../interface/globaldata/globaldata';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private GlobalUrl =
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-21-2020.csv';
  private datewisedata =
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
  constructor(private http: HttpClient) {}
  getglobaldata() {
    return this.http.get(this.GlobalUrl, { responseType: 'text' }).pipe(
      map((result) => {
        let raw = {};
        let data: Globaldata[] = [];
        let rows = result.split('\n');
        rows.splice(0, 1);

        rows.forEach((row) => {
          let col = row.split(/,(?=\S)/);
          let cs = {
            country: col[3],
            confiremed: +col[7],
            deaths: +col[8],
            recovered: +col[9],
            active: +col[10],
          };
          let temp: Globaldata = raw[cs.country];
          if (temp) {
            temp.active = cs.active + temp.active;
            temp.confiremed = cs.confiremed + temp.confiremed;
            temp.deaths = cs.deaths + temp.deaths;
            temp.recovered = cs.recovered + temp.recovered;
            raw[cs.country] = temp;
          } else {
            raw[cs.country] = cs;
          }
        });

        return <Globaldata[]>Object.values(raw);
      })
    );
  }
  getdatewisedata() {
    return this.http.get(this.datewisedata, { responseType: 'text' }).pipe(
      map((re) => {
        let rows = re.split('\n');
        let main = {};
        //console.log(rows);
        let header = rows[0];

        let date = header.split(/,(?=\S)/);

        date.splice(0, 4);
        //  console.log(date);
        rows.splice(0, 1);
        rows.forEach((re) => {
          let col = re.split(/,(?=\S)/);
          let con = col[1];
          col.splice(0, 4);

          //console.log(con, col);
          main[con] = [];
          col.forEach((value, index) => {
            let dateWise: Datwisedata = {
              case: +value,
              country: con,
              date: new Date(Date.parse(date[index])),
            };
            main[con].push(dateWise);
          });
        });

        return main;
      })
    );
  }
}
