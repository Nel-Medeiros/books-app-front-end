import { BookDTO } from './../../books/bookDTO';
import { Book } from './../../books/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  public booksData() {
    return this.http.get('https://book-api-eps.herokuapp.com/api/books/');
  }

  public getBookById(bookId: string) {
    return this.http.get('https://book-api-eps.herokuapp.com/api/books/' + bookId);
  }

  public removeBook(bookId: string) {
    return this.http.delete('https://book-api-eps.herokuapp.com/api/books/' + bookId);
  }

  public addBook(book: BookDTO) {
    return this.http.post('https://book-api-eps.herokuapp.com/api/books/', book);
  }

  public updateBook(bookId: string, book: BookDTO) {
    return this.http.put('https://book-api-eps.herokuapp.com/api/books/' + bookId, book);
  }
}
