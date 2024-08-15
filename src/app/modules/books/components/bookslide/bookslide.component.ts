import { Component, Input } from '@angular/core'
import { BookService } from '../../../../shared/services/books_service/book.service'

@Component({
  selector: 'app-bookslide',
  templateUrl: './bookslide.component.html',
  styleUrls: ['./bookslide.component.scss'],
})
export class BookslideComponent {
  @Input() books: any[] = []
  currentIndex = 0
  booksPerSlide = 5

  constructor(private bookservice: BookService) {}

  ngOnInit() {}

  getCurrentBooks() {
    const startIndex = this.currentIndex * this.booksPerSlide
    return this.books.slice(startIndex, startIndex + this.booksPerSlide)
  }

  nextSlide() {
    if ((this.currentIndex + 1) * this.booksPerSlide < this.books.length) {
      this.currentIndex++
    } else {
      this.currentIndex = 0 // Go back to the first set if at the end
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--
    } else {
      this.currentIndex = Math.floor(this.books.length / this.booksPerSlide)
    }
  }
}
