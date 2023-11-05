import { Component, OnInit } from '@angular/core';
import { bookList } from './book-list'
import { Book } from '../../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      
  }
  
  books: Book[] = bookList;
  listImageWidth: number = 300;

  addToCart(book: Book){
    console.log(book);
  }
}
