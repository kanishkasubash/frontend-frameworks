import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book = {} as Book;
  @Input() imageWidth: number = 0;

  @Output() bookEmitter = new EventEmitter<Book>();

  addToCart(){
    this.bookEmitter.emit(this.book);
  }

}
