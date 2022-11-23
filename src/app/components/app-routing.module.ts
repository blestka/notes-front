import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import {NotesCreateComponent} from "./notes-create.component";
import {NotesComponent} from "./notes.component";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  { path: 'notes/:noteId', component: NotesComponent },
  { path: '', pathMatch: 'full', component: NotesCreateComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
