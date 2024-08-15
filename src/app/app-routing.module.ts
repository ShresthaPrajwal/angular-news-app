import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './modules/top_stories/top-stories/top-stories.component';
import { MostPopularComponent } from './modules/most-popular/most-popular/most-popular.component';
import { BooksComponent } from './modules/books/books/books.component';

const routes: Routes = [
  { path: 'top-stories', component: TopStoriesComponent },
  { path: 'most-popular', component: MostPopularComponent },
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: '/top-stories', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
