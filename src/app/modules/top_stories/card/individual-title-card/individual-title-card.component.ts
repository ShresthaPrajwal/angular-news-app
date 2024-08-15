import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individual-title-card',
  templateUrl: './individual-title-card.component.html',
  styleUrl: './individual-title-card.component.scss'
})
export class IndividualTitleCardComponent {
  @Input() public image?: string;
  @Input() public title?: string;
  @Input() public abstract?: string;
  @Input() public date?: string;
  constructor(){}
}
