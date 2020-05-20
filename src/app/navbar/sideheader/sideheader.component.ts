
import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-sideheader',
  templateUrl: './sideheader.component.html',
  styleUrls: ['./sideheader.component.scss'],
})
export class SideheaderComponent implements OnInit {
  @Output() closesidenav = new EventEmitter<void>();

  isAuth = false;
  constructor() {}
  onclose() {
    this.closesidenav.emit();
  }
  ngOnInit(): void {}
}
