import React from 'react'
import NoteCard from './NoteCard'

const data = [
    {
      "title": "Meeting Summary",
      "content": "Discussed project updates and upcoming deadlines.",
      "type": "work",
      "date": "2025-01-07",
      "headerColor": "#4CAF50",
      "bodyColor": "#E8F5E9",
      "position": { "x": 100, "y": 50 }
    },
    {
      "title": "Grocery List",
      "content": "Milk, Bread, Eggs, Vegetables, Fruits, Coffee",
      "type": "personal",
      "date": "2025-01-06",
      "headerColor": "#FF9800",
      "bodyColor": "#FFF3E0",
      "position": { "x": 50, "y": 200 }
    },
    {
      "title": "Inspirational Quote",
      "content": "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"",
      "type": "quote",
      "date": "2025-01-05",
      "headerColor": "#2196F3",
      "bodyColor": "#E3F2FD",
      "position": { "x": 300, "y": 350 }
    },
    {
      "title": "Project Task List",
      "content": "Add a responsive navbar, Design the homepage banner, Integrate contact form",
      "type": "work",
      "date": "2025-01-04",
      "headerColor": "#9C27B0",
      "bodyColor": "#F3E5F5",
      "position": { "x": 400, "y": 500 }
    },
    {
      "title": "Doctor's Appointment",
      "content": "Visit the downtown clinic at 10:00 AM.",
      "type": "reminder",
      "date": "2025-01-03",
      "headerColor": "#F44336",
      "bodyColor": "#FFEBEE",
      "position": { "x": 150, "y": 650 }
    }
  ]
  

export default function AllNotes() {
    return (
        <div className="container py-[70px] grid grid-cols-3 gap-4">
            {
                data.map((note, index) => (
                    <NoteCard key={index} note={note} />
                ))
            }
        </div>
    )
}
