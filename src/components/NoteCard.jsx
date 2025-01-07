import React, { useRef } from 'react'

export default function NoteCard({ note }) {
    const noteRef = useRef(null);
    return (
        <div className="cursor-pointer h-auto" style={{
            backgroundColor: note.bodyColor, borderTop: `5px solid ${note.headerColor}`,
        }}>
            <div className='px-4 py-2'>
                <p>{note?.title}</p>
            </div>
            <div className='p-4'>
                <textarea 
                className='bg-inherit w-full resize-none focus:outline-none' defaultValue={note?.content}></textarea>
            </div>
        </div>
    )
}
