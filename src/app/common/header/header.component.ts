import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isShown = false;
  constructor(private appService: AppService) {}
  ngOnInit(): void {}

  toggleShow() {
    this.isShown = !this.isShown;
  }

  isLoggedIn() {
    return this.appService.isLoggedIn();
  }

  logout() {
    this.isShown = false;
    this.appService.doLogout();
  }
}
