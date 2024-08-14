import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopStoriesService {

  private readonly TOP_STORIES_ENDPOINT =  `https://api.nytimes.com/svc/topstories/v2`;
  private readonly apiKey = environment.API_KEY;
  constructor(private http: HttpClient) { }

  public fetchTopStories(category: string): Observable<any>{
    const url = `${this.TOP_STORIES_ENDPOINT}/${category}.json?api-key=${this.apiKey}`;
    return this.http.get(url);
  }
}
