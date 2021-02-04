import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { UpdateDialogDataComponent } from './update-dialog-data/update-dialog-data.component';
import { AddBookDialogDataComponent } from './add-book-dialog-data/add-book-dialog-data.component';
import { BookFormDialogComponent } from './book-form-dialog/book-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    BooksComponent,
    BookFormComponent,
    DialogDataComponent,
    UpdateDialogDataComponent,
    AddBookDialogDataComponent,
    BookFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
