import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent {
  noteTitle: string = "";

  constructor(public noteService: NoteService){}

  handleSubmit = () => {
    if(!this.noteTitle) return;

    const newNote: Note = {
      id: this.noteService.createID(),
      title: this.noteTitle,
      marked: false
    }

    this.noteService.createNote(newNote);
  }
}
