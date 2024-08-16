import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-card',
  templateUrl: './individual-card.component.html',
  styleUrl: './individual-card.component.scss'
})
export class IndividualCardComponent{
  @Input() public image?: string;
  @Input() public title?: string;
  @Input() public abstract?: string;
  @Input() public date?: string;
  @Input() public url?: string;
  constructor(){}
}
