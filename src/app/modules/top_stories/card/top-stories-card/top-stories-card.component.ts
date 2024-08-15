import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-top-stories-card',
  templateUrl: './top-stories-card.component.html',
  styleUrls: ['./top-stories-card.component.scss']
})
export class TopStoriesCardComponent implements OnChanges {
  @Input() public stories: any[] = [];
  @Input() public title: string = '';

  public sanitizedStories: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stories']) {
      this.sanitizedStories = this.sanitizeStories(this.stories);
    }
  }

  private sanitizeStories(stories: any[]): any[] {
    return stories.filter(story => this.isValidStory(story));
  }

  private isValidStory(story: any): boolean {
    return story && story.title && 
           story.abstract &&
           story.url && story.url !== 'null' && 
           Array.isArray(story.multimedia) &&
           story.multimedia.length > 0;
  }
}
