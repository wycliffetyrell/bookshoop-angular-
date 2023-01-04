import { Book } from './../types/Book';
import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [];
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  isShowing: boolean = true;
}
