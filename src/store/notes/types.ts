
export interface Note {
    content: string
    title: string
}

export interface NewNoteAction {
    type: string;
    payload: Note
}

export type NotesActionsTypes = NewNoteAction

export type NotesState = Note[] 