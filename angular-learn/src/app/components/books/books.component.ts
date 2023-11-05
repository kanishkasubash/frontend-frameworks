import { Component } from '@angular/core';
import { bookList } from './book-list'
import { Book } from '../../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
  books: Book[] = bookList;
  listImageWidth: number = 300;
}
