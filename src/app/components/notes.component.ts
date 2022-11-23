import {Component, OnInit} from '@angular/core';
import {NotesService} from "../services/notes.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'notes-get',
  templateUrl: './notes.component.html',
  styleUrls: ['./app.component.css']
})
export class NotesComponent implements OnInit {
  title = 'notes-front';
  noteText: string = '';
  noteId: string = '';
  noteGetForm!: FormGroup;

  constructor(private notesService: NotesService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  createNotesForm() {
    this.noteGetForm = this.formBuilder.group({
      text: [{value: this.noteText, disabled: true}],
    });
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
          this.noteId = params['noteId'];
        }
      );
    this.notesService.get(this.noteId).subscribe(
      (response) => {
        console.log("Success");
        this.noteText=response.text;
      },
      (responseError) => {
        console.log("Error");
      }
    );
    this.createNotesForm();
  }
}
