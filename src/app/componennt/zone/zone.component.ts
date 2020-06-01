import { Zoneinterface } from './../../interface/zoneinterface';
import { DataService } from './../../service/dataservice/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
})
export class ZoneComponent implements OnInit {
  constructor(private data: DataService) {}

  datarray: Zoneinterface[] = [];
  isLinear = false;
  secondFormGroup: FormGroup;
  zone: string[] = [];
  diczone: string;
  tempstate = [];
  firstFormGroup: FormGroup;

  state = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

  ngOnInit(): void {
    this.data.Zonegetdata().subscribe({
      next: (result) => {
        this.datarray = result;
      },
    });
  }
  update(f: NgForm) {
    console.log(f.value.state);
    this.zone = [];
    this.datarray.forEach((re) => {
      if (re.State === f.value.state) {
        this.zone.push(re.DistrictName);
      }
    });
  }
  getZone(z: NgForm) {
    this.diczone = null;
    this.datarray.forEach((re) => {
      if (re.DistrictName === z.value.dic) {
        this.diczone = re.Classification;
      }
    });
  }
}
