import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NGProj';
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    // this.appService.doLogin('admin@deepersignals.com', 'password');
  }
}
