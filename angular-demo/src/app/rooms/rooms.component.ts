import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  
  room: string = 'Room Availability';
  numberOfRooms: number = 10;
  hideRooms: boolean = true;

  roomToggle() {
    this.hideRooms = !this.hideRooms;
  }

}
