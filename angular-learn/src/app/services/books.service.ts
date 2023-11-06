import { Injectable } from '@angular/core';
import { bookList } from '../data/book-list';

@Injectable()
export class BooksService {

  constructor() { }

  /**
   * Get all books data
   * @returns bookList[ ]
   */
  getBooks(){
    return bookList;
  }
}
