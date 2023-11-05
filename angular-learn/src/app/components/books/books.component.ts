import { Component } from '@angular/core';
import { books } from './books'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
  books: any = books;

  // [width]="listImageWidth" Property Binding
  listImageWidth: number = 200;
  // [disabled]="isDisabled" Property Binding
  isDisabled: boolean = false;

  // {{ clicks }} Angular interpolation
  clicks: number = 0;

  // [(ngModel)]="inputValue" Two-way Binding
  inputValue: string = '';

  // (click)="handleClick()" Event Binding
  handleClick() {
    this.clicks++;
  }
}
