import Note from "../models/note";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import CreateNoteResponse from "../models/create.note.response";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import NoteResponse from "../models/note.response";

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  apiUrl = `${environment.apiUrl}/notes`;

  constructor(private httpClient: HttpClient) {
  }

  create(note: Note): Observable<CreateNoteResponse> {
    return this.httpClient.post<CreateNoteResponse>(this.apiUrl, note);
  }

  get(id: string, password?: string): Observable<NoteResponse> {
    let headers = new HttpHeaders();
    if (password?.trim().length != 0) {
      headers.append('Authorization', 'Basic ' + password);
    }
    return this.httpClient.get<NoteResponse>(this.apiUrl + "/" + id, {headers: headers});
  }
}
