import {NoteReducer, NoteState} from "./notes.reducer";

export interface AppState {
  noteState: NoteState;
}

export const AppReducers = {
  noteReducer: NoteReducer,
};
