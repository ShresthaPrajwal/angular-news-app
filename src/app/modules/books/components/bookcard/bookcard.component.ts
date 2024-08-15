import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.scss',
})
export class BookcardComponent {
  @Input() book: any
}
