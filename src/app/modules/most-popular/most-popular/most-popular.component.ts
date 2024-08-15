import { Component, OnInit } from '@angular/core';
import { MostPopularService } from '../../../shared/services/news_services/most-popular.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.scss'
})
export class MostPopularComponent implements OnInit {
  public mostPopularEmailedperDay:any[]=[];
  public mostPopularEmailedperWeek:any[]=[];
  public mostPopularEmailedperMonth:any[]=[];
  public selectedPeriod: 'day' | 'week' | 'month' = 'day';


  constructor(private mostPopularService: MostPopularService) {}
  ngOnInit(): void {
    this.getMostPopularEmailedPerDay();
    this.getMostPopularEmailedPerMonth();
    this.getMostPopularEmailedPerWeek();

  }

  getMostPopularEmailedPerDay(): void {
    this.mostPopularService.fetchMostPopularEmailed(1).subscribe(
      (data) => {
        this.mostPopularEmailedperDay = data.results.slice(10);
        console.log('Fetched most popular emailed articles in a day:', this.mostPopularEmailedperDay);
      },
      (error) => {
        console.error('Error fetching most popular emailed articles:', error);
      }
    );
  }
  getMostPopularEmailedPerWeek(): void {
    this.mostPopularService.fetchMostPopularEmailed(7).subscribe(
      (data) => {
        this.mostPopularEmailedperWeek = data.results.slice(10);
        console.log('Fetched most popular emailed articles in a week:', this.mostPopularEmailedperWeek);
      },
      (error) => {
        console.error('Error fetching most popular emailed articles:', error);
      }
    );
  }
  getMostPopularEmailedPerMonth(): void {
    this.mostPopularService.fetchMostPopularEmailed(30).subscribe(
      (data) => {
        this.mostPopularEmailedperMonth = data.results.slice(10);
        console.log('Fetched most popular emailed articles in a month:', this.mostPopularEmailedperMonth);
      },
      (error) => {
        console.error('Error fetching most popular emailed articles:', error);
      }
    );
  }
}