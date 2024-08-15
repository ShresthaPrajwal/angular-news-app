import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopStoriesService {

  private readonly TOP_STORIES_ENDPOINT = `https://api.nytimes.com/svc/topstories/v2`;
  private readonly apiKey = environment.API_KEY;
  constructor(private http: HttpClient) { }

  public fetchTopStories(category: string): Observable<any> {
    const url = `${this.TOP_STORIES_ENDPOINT}/${category}.json?api-key=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
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
