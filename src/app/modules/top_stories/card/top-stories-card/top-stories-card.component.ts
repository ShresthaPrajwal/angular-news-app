import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-stories-card',
  templateUrl: './top-stories-card.component.html',
  styleUrl: './top-stories-card.component.scss'
})
export class TopStoriesCardComponent {
  @Input() public stories ?: any[];
  @Input() public title ?: string;
  constructor(){}
}
