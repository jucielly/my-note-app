export interface Note {
    id?: string
    content: string
    title: string
}

export interface NewNoteAction {
    type: string;
    payload: Note
}

export interface SetNotesAction {
    type: string;
    payload: Note[]
} 

export type NotesActionsTypes = NewNoteAction | SetNotesAction

export type NotesState = Note[] 