import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly BOOK_ENDPOINT = `https://api.nytimes.com/svc/books/v3`;
  private readonly apiKey = environment.API_KEY;
  constructor(private http: HttpClient) { }

  //BOOK_ENDPOINT has several lists that can be accessed 
  public fetchBookListNames(): Observable<any> {
    const url = `${this.BOOK_ENDPOINT}/lists/names.json?api-key=${this.apiKey}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  public fetchSpecificBookList(list: string, bestSellersDate?: string, publishedDate?: string, offset?: string): Observable<any> {
    let params = new HttpParams().set('list', list)
    if (bestSellersDate) {
      params = params.set('bestsellers-date', bestSellersDate);
    }

    if (publishedDate) {
      params = params.set('published-date', publishedDate);
    }

    if (offset) {
      params = params.set('offset', offset.toString());
    }
    const url = `${this.BOOK_ENDPOINT}/lists.json?api-key=${this.apiKey}`;
    return this.http.get(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  public getFullOverview(publishedDate?: string): Observable<any> {

    let params = new HttpParams();
    if (publishedDate) {
      params = params.set('published-date', publishedDate);
    }

    const url = `${this.BOOK_ENDPOINT}/lists/full-overview.json?api-key=${this.apiKey}`;
    return this.http.get(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  public getReviews(title: string, author?: string, isbn?: number): Observable<any> {
    let url = `${this.BOOK_ENDPOINT}/reviews.json?api-key=${this.apiKey}`;
    let params = new HttpParams().set('title', title);
    if (isbn) {
      params = params.set('isbn', isbn)
    }
    if (author) {
      params = params.set('author', author)
    }
    return this.http.get(url, { params }).pipe(
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
