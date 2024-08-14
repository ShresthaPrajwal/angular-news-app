import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get(url);
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
    return this.http.get(url, { params });
  }
}
