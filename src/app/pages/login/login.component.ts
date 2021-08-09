import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginForm } from '@app/helpers/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      // rememberMe: false,
    });
  }

  public onLoginFormSubmit(form: LoginForm): void {
    if (this.loginForm.valid) {
      this.appService.doLogin(form);
    }
  }
}
