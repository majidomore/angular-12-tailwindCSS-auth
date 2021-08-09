import { TOKEN_KEY } from './../helpers/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Assessment, User } from '@app/helpers/models';
import { environment } from '../../environments/environment';
import { LoginForm } from '../helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Api url
  apiUrl = environment.api_url;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUserAssessments(): Observable<Assessment[]> {
    return this.http
      .get<Assessment[]>(this.apiUrl + '/userassessments', this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  login(login: LoginForm): Observable<User> {
    return this.http
      .post<User>(
        this.apiUrl + '/login',
        JSON.stringify(login),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
