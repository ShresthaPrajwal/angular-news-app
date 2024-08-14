import { Component, OnInit } from '@angular/core';
import { TopStoriesService } from './shared/services/news_services/top-stories.service';
import { BookService } from './shared/services/books_service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private ts: TopStoriesService, private bs: BookService) {
  }

  ngOnInit(): void {

  }
}
