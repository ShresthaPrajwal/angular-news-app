import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

type Period = 1 | 7 | 30;

@Injectable({
  providedIn: 'root'
})
export class MostPopularService {

  private readonly MOST_POPULAR_API = `https://api.nytimes.com/svc/mostpopular/v2`;
  private readonly apiKey = environment.API_KEY;
  constructor(private http: HttpClient) { }

  public fetchMostPopularEmailed(period: Period): Observable<any> {
    const url = `${this.MOST_POPULAR_API}/emailed/${period}.json?api-key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }

  public fetchMostPopularShared(period: Period): Observable<any> {
    const url = `${this.MOST_POPULAR_API}/shared/${period}.json?api-key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }

  public fetchMostPopularViewed(period: Period): Observable<any> {
    const url = `${this.MOST_POPULAR_API}/viewed/${period}.json?api-key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An Error Occurred:', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(() => {
      console.log('Something unpleasant happened. Error: ', error)
    });
  }
}
