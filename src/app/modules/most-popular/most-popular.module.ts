import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostPopularComponent } from './most-popular/most-popular.component';



@NgModule({
  declarations: [
    MostPopularComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MostPopularComponent
  ]
})
export class MostPopularModule { }
