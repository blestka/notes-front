import {Component, OnInit} from '@angular/core';
import {NotesService} from "../services/notes.service";
import Note from "../models/note";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'notes-create',
  templateUrl: './notes-create.html',
  styleUrls: ['./app.component.css']
})
export class NotesCreateComponent implements OnInit {
  title = 'notes-front';
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    console.log(day);
    return day >= new Date();
  };
  noteText: string = '';
  noteForm!: FormGroup;
  noteSaved: boolean = false;

  constructor(private notesService: NotesService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createNotesForm();
  }

  createNotesForm() {
    this.noteForm = this.formBuilder.group({
      text: ['', Validators.required],
      expiredAt: [''],
      password: ['', Validators.pattern('')],
      confirmPassword: ['', Validators.pattern('')]
    });
  }

  share() {
    let note: Note = {...this.noteForm.value};
    this.notesService.create(note).subscribe(
      (response) => {
        console.log("Success");
        this.noteSaved=true;
      },
      (responseError) => {
        console.log("Error");
      }
    );
  }
}
