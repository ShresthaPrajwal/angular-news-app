import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualCardComponent } from './components/individual-card/individual-card.component';



@NgModule({
  declarations: [
    IndividualCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[IndividualCardComponent]
})
export class SharedModule { }
