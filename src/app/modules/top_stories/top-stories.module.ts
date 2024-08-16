import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { TopStoriesCardComponent } from './card/top-stories-card/top-stories-card.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'
import { MatChipsModule } from '@angular/material/chips';

import { IndividualCardComponent } from '../../shared/components/individual-card/individual-card.component';
import { IndividualTitleCardComponent } from './card/individual-title-card/individual-title-card.component'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TopStoriesComponent,
    TopStoriesCardComponent,
    IndividualTitleCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    SharedModule
  ],
  exports:[TopStoriesComponent]
})
export class TopStoriesModule { }
