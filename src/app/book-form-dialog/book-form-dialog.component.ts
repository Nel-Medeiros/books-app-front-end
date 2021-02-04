import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Book } from '../books/book';
import { BookDTO } from '../books/bookDTO';
import { BooksService } from '../services/books-service/books.service';

@Component({
  selector: 'app-book-form-dialog',
  templateUrl: './book-form-dialog.component.html',
  styleUrls: ['./book-form-dialog.component.css']
})
export class BookFormDialogComponent implements OnInit {

  bookForm: FormGroup;

  dialogTitle: string;
  isUpdate: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Book, public dialogRef: MatDialogRef<BookFormDialogComponent>, private formBuilder: FormBuilder, private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {

    if (this.data == null) {
      this.dialogTitle = 'Add Book';
      this.isUpdate = false;
      this.bookForm = this.formBuilder.group({
        bookName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        authorName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
        authorAge: new FormControl('', [Validators.required, Validators.min(10), Validators.max(100)]),
        genre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
      });
    } else {
      this.dialogTitle = 'Update Book';
      this.isUpdate = true;
      this.bookForm = this.formBuilder.group({
        bookName: new FormControl(this.data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        authorName: new FormControl(this.data.author.name, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
        authorAge: new FormControl(this.data.author.age, [Validators.required, Validators.min(10), Validators.max(100)]),
        genre: new FormControl(this.data.genre, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
      });
    }

  }

  public addBook() {
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
        this.dialogRef.close();
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
        this.dialogRef.close();
        // this.dialogRef.afterClosed().subscribe(() => {
        //   this.books.getBooks();
        // })
      }))
      .subscribe(() => {
        console.log('Book Updated.');
      })
  }

}
