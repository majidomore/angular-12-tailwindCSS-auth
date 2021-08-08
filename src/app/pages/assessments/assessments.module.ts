import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AssessmentsComponent } from './assessments.component';

export const routes = [
  { path: '', component: AssessmentsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [AssessmentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AssessmentsModule {}
