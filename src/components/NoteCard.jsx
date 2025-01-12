import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '../store/slices/noteSlice';

export default function NoteCard({ index, note }) {
    const noteRef = useRef(null);
    const textAreaRef = useRef(null);
    const dispatch = useDispatch();

    const handleOnInput = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
        console.log(textAreaRef.current.value);
        if (e.target.scrollHeight > 350) {
            e.target.style.height = "350px";
            e.target.style.overflowY = "auto";
        } else {
            e.target.style.overflowY = "hidden";
        }

        if (noteRef.current) {
            noteRef.current.style.height = "fit-content";
        }
        dispatch(updateNote({
            id: note.id,
            content: e.target.value
        }))
    };

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;

            if (textAreaRef.current.scrollHeight > 350) {
                textAreaRef.current.style.height = "350px";
                textAreaRef.current.style.overflowY = "auto";
            } else {
                textAreaRef.current.style.overflowY = "hidden";
            }
        }
    }, []);

    return (
        <div
            ref={noteRef}
            className="note-card cursor-pointer flex flex-col"
            style={{
                backgroundColor: note.bodyColor,
                borderTop: `5px solid ${note.headerColor}`,
                height: "fit-content",
            }}
        >
            <div className="px-4 py-2">
                <p>{note?.title}</p>
            </div>
            <div className="p-4">
                <textarea
                    ref={textAreaRef}
                    className="bg-inherit w-full resize-none focus:outline-none overflow-hidden"
                    defaultValue={note?.content}
                    onInput={handleOnInput}
                    style={{
                        height: 'auto',
                        maxHeight: '350px',
                    }}
                ></textarea>
            </div>
        </div>
    );
}
