import { Injectable } from '@angular/core';
import { bookList } from '../data/book-list';

@Injectable()
export class BooksService {

  constructor() { }

  /**
   * get all books from bookList[]
   */
  getBooks(){
    return bookList;
  }
}
