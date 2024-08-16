import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-head-card',
  templateUrl: './head-card.component.html',
  styleUrl: './head-card.component.scss',
})
export class HeadCardComponent {
  @Input() data: any = {
    title: 'Somebody died',
    description:
      'Someone died because someone killed someone and someone went jail',
    image: 'https://m.media-amazon.com/images/I/51rCeR0z21L._AC_SX569_.jpg',
  }
}
