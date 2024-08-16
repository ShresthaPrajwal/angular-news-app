import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BookComponent } from './components/book/book.component'
import { BookcardComponent } from './components/bookcard/bookcard.component'

import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'

import { BookslideComponent } from './components/bookslide/bookslide.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms'
import { BooklargeComponent } from './components/booklarge/booklarge.component'
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    BookComponent,
    BookcardComponent,
    BookslideComponent,
    BooklargeComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    BookComponent,
    BookcardComponent,
    BookslideComponent,
    MatSelectModule,
  ],
})
export class BooksModule {}
