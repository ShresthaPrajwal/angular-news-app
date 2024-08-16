import { Component, OnInit } from '@angular/core';
import { MostPopularService } from '../../../shared/services/news_services/most-popular.service';
import { SnackbarService } from '../../../shared/services/snackbar-service/snackbar-service.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {
  public mostPopularEmailedPerDay: any[] = [];
  public mostPopularEmailedPerWeek: any[] = [];
  public mostPopularEmailedPerMonth: any[] = [];
  
  public mostPopularSharedPerDay: any[] = [];
  public mostPopularSharedPerWeek: any[] = [];
  public mostPopularSharedPerMonth: any[] = [];

  public mostPopularViewedPerDay: any[] = [];
  public mostPopularViewedPerWeek: any[] = [];
  public mostPopularViewedPerMonth: any[] = [];

  public selectedPeriod: 'day' | 'week' | 'month' = 'day';
  public selectedType: 'emailed' | 'shared' | 'viewed' = 'emailed';

  constructor(
    private mostPopularService: MostPopularService,
    private snackBarService: SnackbarService
  ) {}

  public ngOnInit(): void {
    this.loadAllData();
  }

  private loadAllData(): void {
    this.getMostPopularEmailedPerDay();
    this.getMostPopularEmailedPerWeek();
    this.getMostPopularEmailedPerMonth();

    this.getMostPopularSharedPerDay();
    this.getMostPopularSharedPerWeek();
    this.getMostPopularSharedPerMonth();

    this.getMostPopularViewedPerDay();
    this.getMostPopularViewedPerWeek();
    this.getMostPopularViewedPerMonth();
  }

  // Emailed Functions
  private getMostPopularEmailedPerDay(): void {
    this.mostPopularService.fetchMostPopularEmailed(1).subscribe(
      (data) => this.mostPopularEmailedPerDay = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching emailed articles for the popular.')
    );
  }

  private getMostPopularEmailedPerWeek(): void {
    this.mostPopularService.fetchMostPopularEmailed(7).subscribe(
      (data) => this.mostPopularEmailedPerWeek = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching emailed articles for the week.')
    );
  }

  private getMostPopularEmailedPerMonth(): void {
    this.mostPopularService.fetchMostPopularEmailed(30).subscribe(
      (data) => this.mostPopularEmailedPerMonth = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching emailed articles for the month.')
    );
  }

  // Shared Functions
  private getMostPopularSharedPerDay(): void {
    this.mostPopularService.fetchMostPopularShared(1).subscribe(
      (data) => this.mostPopularSharedPerDay = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching shared articles for the day.')
    );
  }

  private getMostPopularSharedPerWeek(): void {
    this.mostPopularService.fetchMostPopularShared(7).subscribe(
      (data) => this.mostPopularSharedPerWeek = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching shared articles for the week.')
    );
  }

  private getMostPopularSharedPerMonth(): void {
    this.mostPopularService.fetchMostPopularShared(30).subscribe(
      (data) => this.mostPopularSharedPerMonth = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching shared articles for the month.')
    );
  }

  // Viewed Functions
  private getMostPopularViewedPerDay(): void {
    this.mostPopularService.fetchMostPopularViewed(1).subscribe(
      (data) => this.mostPopularViewedPerDay = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching viewed articles for the day.')
    );
  }

  private getMostPopularViewedPerWeek(): void {
    this.mostPopularService.fetchMostPopularViewed(7).subscribe(
      (data) => this.mostPopularViewedPerWeek = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching viewed articles for the week.')
    );
  }

  private getMostPopularViewedPerMonth(): void {
    this.mostPopularService.fetchMostPopularViewed(30).subscribe(
      (data) => this.mostPopularViewedPerMonth = data.results.slice(0, 10),
      () => this.snackBarService.showMessage('Error fetching viewed articles for the month.')
    );
  }

  public getStoriesForPeriod(): any[] {
    const periodMap = {
      'day': 'PerDay',
      'week': 'PerWeek',
      'month': 'PerMonth'
    };

    const typeMap = {
      'emailed': 'Emailed',
      'shared': 'Shared',
      'viewed': 'Viewed'
    };

    const period = periodMap[this.selectedPeriod];
    const type = typeMap[this.selectedType];

    return (this as any)[`mostPopular${type}${period}`] || [];
  }
}
