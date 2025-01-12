import React from 'react'

export default function AddNote({ handleAddNewNote }) {
  return (
    <div className='flex items-center justify-center border border-neutral-900 border-gray-400 h-[200px] mb-[16px] cursor-pointer' onClick={() => handleAddNewNote()}>
        <p className='text-gray-500'>AddNote</p>
    </div>
  )
}
