import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-booklarge',
  templateUrl: './booklarge.component.html',
  styleUrl: './booklarge.component.scss',
})
export class BooklargeComponent {
  @Input() rank: number = NaN
  @Input() title: string = ''
  @Input() author: string = ''
  @Input() publisher: string = ''
  @Input() description: string = ''
  @Input() imageUrl: string = ''
  @Input() amazonLink: string = ''
}
