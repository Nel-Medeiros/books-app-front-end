import { BookDTO } from './../books/bookDTO';
import { BooksService } from './../services/books-service/books.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Book } from '../books/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  bookId: string = '';
  bookFromDb: Book;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params.bookId;
    });
    if (this.bookId != null) {
      this.getBook();
      setTimeout(() => {
        console.log(this.bookFromDb);
        this.bookForm = this.formBuilder.group({
          bookName: new FormControl(this.bookFromDb.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
          authorName: new FormControl(this.bookFromDb.author.name, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
          authorAge: new FormControl(this.bookFromDb.author.age, [Validators.required, Validators.min(10), Validators.max(100)]),
          genre: new FormControl(this.bookFromDb.genre, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
        });
      }, 1000);
    }

    this.bookForm = this.formBuilder.group({
      bookName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      authorName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      authorAge: new FormControl('', [Validators.required, Validators.min(10), Validators.max(100)]),
      genre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    });
  }

  isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}';
  }

  addBook() {
    const bookName = this.bookForm.get('bookName').value;
    const authorName = this.bookForm.get('authorName').value;
    const authorAge = this.bookForm.get('authorAge').value;
    const genre = this.bookForm.get('genre').value;

    const book = new BookDTO();
    book.bookName = bookName;
    book.genre = genre;
    book.authorName = authorName;
    book.authorAge = authorAge;

    this.booksService.addBook(book)
      .pipe(finalize(() => {
        this.router.navigate(['/books'])
      }))
      .subscribe(() => {
        console.log('Book Added.');
      })
  }

  public updtBook(bookId: string) {
    const bookName = this.bookForm.get('bookName').value;
    const authorName = this.bookForm.get('authorName').value;
    const authorAge = this.bookForm.get('authorAge').value;
    const genre = this.bookForm.get('genre').value;

    const book = new BookDTO();
    book.bookName = bookName;
    book.genre = genre;
    book.authorName = authorName;
    book.authorAge = authorAge;

    this.booksService.updateBook(bookId, book)
      .pipe(finalize(() => {
        this.router.navigate(['/books'])
      }))
      .subscribe(() => {
        console.log('Book Updated.');
      })
  }

  setBook(book: Book) {
    this.bookFromDb = book;
    console.log('FUNÇÃO setBook: ', this.bookFromDb);
  }

  getBook() {
    let resp = this.booksService.getBookById(this.bookId);
    resp.subscribe(data => {
      console.log(data);
      this.bookFromDb = data as Book;
      this.setBook(this.bookFromDb);
      console.log(this.bookFromDb.name, this.bookFromDb.author.name, this.bookFromDb.author.age, this.bookFromDb.genre);

    });
  }

}
