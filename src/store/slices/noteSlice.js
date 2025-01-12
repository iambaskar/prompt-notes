import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [
    {
      id: "1",
      title: "Meeting Summary",
      content: "Discussed project updates and upcoming deadlines.",
      type: "work",
      date: "2025-01-07",
      headerColor: "#4CAF50",
      bodyColor: "#E8F5E9",
      position: { x: 100, y: 50 },
    },
    {
      id: "2",
      title: "Grocery List",
      content: "Milk, Bread, Eggs, Vegetables, Fruits, Coffee",
      type: "personal",
      date: "2025-01-06",
      headerColor: "#FF9800",
      bodyColor: "#FFF3E0",
      position: { x: 50, y: 200 },
    },
    {
      id: "3",
      title: "Inspirational Quote",
      content:
        '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
      type: "quote",
      date: "2025-01-05",
      headerColor: "#2196F3",
      bodyColor: "#E3F2FD",
      position: { x: 300, y: 350 },
    },
    {
      id: "4",
      title: "Project Task List",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores provident eveniet iusto laborum autem, velit nesciunt! Minus cumque rerum natus aut consectetur est labore unde ex facere autem. In, libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores provident eveniet iusto laborum autem, velit nesciunt! Minus cumque rerum natus aut consectetur est labore unde ex facere autem. In, libero.",
      type: "work",
      date: "2025-01-04",
      headerColor: "#9C27B0",
      bodyColor: "#F3E5F5",
      position: { x: 400, y: 500 },
    },
    {
      id: "5",
      title: "Doctor's Appointment",
      content: "Visit the downtown clinic at 10:00 AM.",
      type: "reminder",
      date: "2025-01-03",
      headerColor: "#F44336",
      bodyColor: "#FFEBEE",
      position: { x: 150, y: 650 },
    },
  ],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    getAllNotes: (state, action) => {
      state.allNotes = action.payload;
    },
    addNote: (state, action) => {
      state.allNotes.push(action.payload);
    },
    removeNote: (state, aciton) => {},
    updateNote: (state, action) => {
      const { id, content } = action.payload;
      const note = state.allNotes.find((note) => note.id == id);
      if (note) {
        note.content = content;
      }
    },
  },
});

export const { getAllNotes, addNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
