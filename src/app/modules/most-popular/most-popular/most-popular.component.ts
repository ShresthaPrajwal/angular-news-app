import { Component, OnInit } from '@angular/core';
import { MostPopularService } from '../../../shared/services/news_services/most-popular.service';
import { SnackbarService } from '../../../shared/services/snackbar-service/snackbar-service.service';

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


  constructor(private mostPopularService: MostPopularService, private SnackBarService:SnackbarService) {}
  ngOnInit(): void {
    this.getMostPopularEmailedPerDay();
    this.getMostPopularEmailedPerMonth();
    this.getMostPopularEmailedPerWeek();

  }

  getMostPopularEmailedPerDay(): void {
    this.mostPopularService.fetchMostPopularEmailed(1).subscribe(
      (data) => {
        this.mostPopularEmailedperDay = data.results.slice(10);
        this.SnackBarService.showMessage('Here are the top 10 most popular news');
      },
      (error) => {
        this.SnackBarService.showMessage('Error in fetching the data');

      }
    );
  }
  getMostPopularEmailedPerWeek(): void {
    this.mostPopularService.fetchMostPopularEmailed(7).subscribe(
      (data) => {
        this.mostPopularEmailedperWeek = data.results.slice(10);
      },
      (error) => {
        this.SnackBarService.showMessage('Error in fetching the data');
      }
    );
  }
  getMostPopularEmailedPerMonth(): void {
    this.mostPopularService.fetchMostPopularEmailed(30).subscribe(
      (data) => {
        this.mostPopularEmailedperMonth = data.results.slice(10);
      },
      (error) => {
        this.SnackBarService.showMessage('Error in fetching the data');
      }
    );
  }
}