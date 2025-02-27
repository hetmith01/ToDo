import { Injectable } from '@angular/core';
import Note from '../../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes:    Note[];

  constructor() {
    this.notes = [
      {
        id: this.createID(),
        title: "cita con el médico",
        marked: false
      },
      {
        id: this.createID(),
        title: "partido de tenis",
        marked: true
      }
    ]
   }

   createID = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
   }
}
