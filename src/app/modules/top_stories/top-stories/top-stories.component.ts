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
  public selectedType: string = 'Home';
  public categories: string[] = [
    'Arts',
    'Automobiles',
    'Books/Review',
    'Business',
    'Fashion',
    'Food',
    'Health',
    'Home',
    'Insider',
    'Magazine',
    'Movies',
    'NYRegion',
    'Obituaries',
    'Opinion',
    'Politics',
    'RealEstate',
    'Science',
    'Sports',
    'SundayReview',
    'Technology',
    'Theater',
    'T-Magazine',
    'Travel',
    'Upshot',
    'US',
    'World'
  ];
  public defaultStories: any[] = [];
  constructor(private TopStoriesService: TopStoriesService){}
  ngOnInit(): void {
    this.TopStoriesService.fetchTopStories('Arts').subscribe(res=>{
      this.topStories= res.results;
      this.topTenStories = this.topStories.slice(0,10);
      this.defaultStories = this.topStories.slice(0,8);
      console.log('res',this.topTenStories)
    })
  }

  public fetchTopStories(type: string): void {
    this.TopStoriesService.fetchTopStories(type).subscribe(res => {
      this.topStories = res.results;
      if(this.topStories.length>10) this.topTenStories = this.topStories.slice(0, 10);
      else this.topTenStories = this.topStories
      console.log('res', this.topTenStories);
    });
  }

  public onTypeChange(type: string): void {
    this.selectedType = type;
    this.fetchTopStories(type);
  }

}
