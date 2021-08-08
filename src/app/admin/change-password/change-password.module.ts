import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ChangePasswordComponent } from './change-password.component';

export const routes = [
  { path: '', component: ChangePasswordComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ChangePasswordModule {}
