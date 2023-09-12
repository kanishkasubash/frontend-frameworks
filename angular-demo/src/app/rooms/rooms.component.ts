import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };

  numberOfRooms: number = this.rooms.totalRooms;
  hideRooms: boolean = true;

  roomToggle() {
    this.hideRooms = !this.hideRooms;
  }

}
