import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import NoteAccess from "../models/note.access";
import {NotesService} from "../services/notes.service";
import {Store} from "@ngrx/store";
import {NoteState} from "../store/notes.reducer";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  noteId$: Observable<string | undefined> = this.store
    .select((s) => s.id)
    .pipe(map((b) => b));
  noteId?: string = '';

  constructor(
    private notesService: NotesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<NoteState>
  ) {
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.noteId$.subscribe((value) => {
      this.noteId = value;
    })
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.loginForm.valid) return;

    let noteAccess: NoteAccess = {...this.loginForm.value};
      this.notesService.get(this.noteId!, noteAccess.password).subscribe(
        (response) => {
          this.router.navigateByUrl('');
        },
        (errorResponse) => {
        }
      );
  }
}
