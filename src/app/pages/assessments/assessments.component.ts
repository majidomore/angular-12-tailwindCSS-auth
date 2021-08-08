import { Component, OnInit } from '@angular/core';
import { Assessment } from '@app/helpers/models';
import { ApiService } from '@app/services/api.service';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'],
})
export class AssessmentsComponent implements OnInit {
  public assessments: Assessment[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getUserAssessments().subscribe((data: Assessment[]) => {
      this.assessments = data;
      this.assessments.forEach((assessment) => {
        console.log(assessment);
      });
    });
  }
}
