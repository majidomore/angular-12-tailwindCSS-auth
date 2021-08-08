import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isShown = false;
  constructor() {}
  ngOnInit(): void {}

  toggleShow() {
    this.isShown = !this.isShown;
  }
}
