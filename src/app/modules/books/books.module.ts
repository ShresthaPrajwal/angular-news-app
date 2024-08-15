import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BookComponent } from './components/book/book.component'
import { BookcardComponent } from './components/bookcard/bookcard.component'

import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'

import { BookslideComponent } from './components/bookslide/bookslide.component'

@NgModule({
  declarations: [BookComponent, BookcardComponent, BookslideComponent],
  imports: [CommonModule, MatCardModule, MatGridListModule],
  exports: [BookComponent, BookcardComponent, BookslideComponent],
})
export class BooksModule {}
