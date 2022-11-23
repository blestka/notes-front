import {createAction, props} from '@ngrx/store';

export const setNoteId = createAction(
  'Set Note Id',
  props<{ noteId: string }>()
);


