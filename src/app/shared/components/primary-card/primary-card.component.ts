import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrl: './primary-card.component.scss',
})
export class PrimaryCardComponent {
  @Input() data: any = {
    title: 'Somebody died',
    description:
      'Someone died because someone killed someone and someone went jail',
    image: 'https://m.media-amazon.com/images/I/51rCeR0z21L._AC_SX569_.jpg',
  }
}
