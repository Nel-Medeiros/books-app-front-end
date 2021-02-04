import { BookFormComponent } from './book-form/book-form.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    data: { title: 'Books' }
  },
  {
    path: 'add-book',
    component: BookFormComponent,
    data: { title: 'Add Book' }
  },
  {
    path: 'update-book/:bookId',
    component: BookFormComponent,
    data: { title: 'Update Book' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
