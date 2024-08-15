import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    MostPopularComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatCardModule,
  ],
  exports:[
    MostPopularComponent
  ]
})
export class MostPopularModule { }
