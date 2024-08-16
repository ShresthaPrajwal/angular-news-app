import { Component } from '@angular/core'
import { BookService } from '../../../../shared/services/books_service/book.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  public book1: any[] = []
  public genres: any[] = []

  public selectedGenre: string = 'Manga'
  isClicked: boolean = false

  constructor(private bookservice: BookService) {}

  ngOnInit() {
    this.getNewBooks(this.selectedGenre)

    this.getBookGenere()
  }

  public getNewBooks(list: string): void {
    this.bookservice.getAllSpecificBooks(list).subscribe({
      next: (data: any) => {
        this.book1 = data?.results?.books
        console.log(this.book1)
      },
    })
  }
  public getBookGenere() {
    this.bookservice.fetchBookListNames().subscribe({
      next: (data: any) => {
        this.genres = data?.results
        console.log(this.genres)
      },
    })
  }
  public changeBook() {
    this.getNewBooks(this.selectedGenre)
  }
  removeLabel() {
    this.isClicked = true
  }
}
