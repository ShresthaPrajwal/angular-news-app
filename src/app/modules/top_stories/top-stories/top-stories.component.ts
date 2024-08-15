import { Component, OnInit } from '@angular/core';
import { TopStoriesService } from '../../../shared/services/news_services/top-stories.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrl: './top-stories.component.scss'
})
export class TopStoriesComponent implements OnInit{

  public topStories ?: any;
  public topTenStories ?: any;
  constructor(private TopStoriesService: TopStoriesService){}
  ngOnInit(): void {
    this.TopStoriesService.fetchTopStories('Arts').subscribe(res=>{
      this.topStories= res.results;
      this.topTenStories = this.topStories.slice(0,10);
      console.log('res',this.topTenStories)
    })
  }
}
