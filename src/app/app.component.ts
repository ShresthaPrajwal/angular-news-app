import { Component, OnInit } from '@angular/core';
import { TopStoriesService } from './shared/services/news_services/top-stories.service';
import { BookService } from './shared/services/books_service/book.service';
import { MostPopularService } from './shared/services/news_services/most-popular.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private ts: TopStoriesService, private bs: BookService, private ps: MostPopularService) {
  }

  ngOnInit(): void {
    this.ts.fetchTopStories('arts').subscribe((result)=>{
      console.log('Arts',result)
    })

    // this.bs.fetchBookListNames().subscribe(res=>{
    //   console.log(res)
    // })

    // this.bs.fetchSpecificBookList('hardcover-fiction','2024-08-11').subscribe(res=>{
    //   console.log(res)
    // })

    this.ps.fetchMostPopularShared(1).subscribe((res)=>{
      console.log(res)
    })
  }
}
