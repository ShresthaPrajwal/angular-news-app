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
      this.currentIndex = 0
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--
    } else {
      // Go to the last slide by calculating the floor value based on booksPerSlide
      const totalSlides = Math.ceil(this.books.length / this.booksPerSlide)
      this.currentIndex = totalSlides - 1
    }
  }
}
