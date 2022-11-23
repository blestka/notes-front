import {createReducer, on} from "@ngrx/store";
import {setNoteId} from "./notes.actions";

export interface NoteState {
  id?: string;
}

const initialNoteState: NoteState = {
  id: undefined,
};

export const NoteReducer = createReducer(
  initialNoteState,
  on(setNoteId, (state: NoteState, { noteId }) => ({
    ...state,
    noteId,
  }))
);

