import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { TopStoriesCardComponent } from './card/top-stories-card/top-stories-card.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'
import { MatChipsModule } from '@angular/material/chips';

import { IndividualCardComponent } from './card/individual-card/individual-card.component';
import { IndividualTitleCardComponent } from './card/individual-title-card/individual-title-card.component'


@NgModule({
  declarations: [
    TopStoriesComponent,
    TopStoriesCardComponent,
    IndividualCardComponent,
    IndividualTitleCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule
  ],
  exports:[TopStoriesComponent]
})
export class TopStoriesModule { }
