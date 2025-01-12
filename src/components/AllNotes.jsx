import React from 'react'
import NoteCard from './NoteCard'
import AddNote from './AddNote'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, getAllNotes } from '../store/slices/noteSlice'

export default function AllNotes() {
  const allNotes = useSelector((state) => state.notes.allNotes);
  const dispatch = useDispatch();

  console.log(allNotes);

  const handleAddNewNote = () => {
    const newEmptyNote = {
      id: Date.now().toString(),
      title: 'untitled',
      content: '',
      date: new Date().toISOString(),
      headerColor: '#f44436',
      bodyColor: '#FFEBEE',
    };
    dispatch(addNote(newEmptyNote));
  };

  return (
    <div className="container py-[70px] px-4 columns-1 sm:columns-2 lg:columns-3 gap-4">
      <AddNote handleAddNewNote={handleAddNewNote} />
      {allNotes?.map((note, index) => (
        <NoteCard key={index} index={index + 1} note={note} />
      ))}
    </div>

  )
}
