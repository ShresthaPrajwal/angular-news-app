import { Component } from '@angular/core'
import { BookService } from '../../../../shared/services/books_service/book.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  book1: any[] = []
  book2: any[] = []
  constructor(private bookservice: BookService) {}

  ngOnInit() {
    this.getNewBooks('hardcover-fiction')
  }

  getNewBooks(list: string) {
    this.bookservice.getAllSpecificBooks(list).subscribe({
      next: (data: any) => {
        this.book1 = data.results.books
        console.log(this.book1)
      },
    })
  }
}
