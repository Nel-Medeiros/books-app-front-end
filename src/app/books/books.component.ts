import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Book } from './book';
import { Author } from './author';
import { BooksService } from './../services/books-service/books.service';
import { DialogDataComponent } from './../dialog-data/dialog-data.component';
import { BookFormDialogComponent } from './../book-form-dialog/book-form-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  obs: Observable<any>;
  books: Book[] = [];
  dataSource = new MatTableDataSource<Book>(this.books);

  constructor(
    public dialog: MatDialog,
    private booksService: BooksService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getBooks();
    this.obs = this.dataSource.connect();
  }

  public getBooks() {
    let resp = this.booksService.booksData();
    resp.subscribe(data => {
      this.dataSource.data = data as Book[];
    });
  }

  public deleteBook(bookId: string) {
    this.booksService.removeBook(bookId).subscribe(() => console.log('Book removed.'));
    console.log(bookId);
  }

  openDialog(name: string, author: Author, genre: string) {
    name = name;
    author = author;
    genre = genre;
    this.dialog.open(DialogDataComponent, {
      data: {
        name: name,
        author: author,
        genre: genre
      }
    });
  }

  updtBookDialog(_id: string, name: string, author: Author, genre: string) {
    _id = _id;
    name = name;
    author = author;
    genre = genre;
    this.dialog.open(BookFormDialogComponent, {
      data: {
        _id: _id,
        name: name,
        author: author,
        genre: genre
      }
    });
  }

  addBookDialog() {
    this.dialog.open(BookFormDialogComponent);
  }

}
