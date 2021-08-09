import { Component, OnInit } from '@angular/core';
import { User } from '@app/helpers/models';
import { AppService } from '../../services/app.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  user?: User;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.user = this.appService.getUser();
  }
}
