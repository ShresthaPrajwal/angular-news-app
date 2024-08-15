import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoriesComponent } from './top-stories/top-stories.component';



@NgModule({
  declarations: [
    TopStoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TopStoriesComponent]
})
export class TopStoriesModule { }
