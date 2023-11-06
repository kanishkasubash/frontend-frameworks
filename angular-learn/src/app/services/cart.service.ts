import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }

  /**
   * Get all books in the cart
   * @returns all books in the cart[ ]
   */
  get(){
    return this.cart;
  }

  /**
   * Add books into cart
   * @param book by Book
   */
  add(book: Book){
    this.cart.push(book);
  }

  remove(book: Book){
    this.cart = this.cart.filter((b)=> b !== book);
  }
}
