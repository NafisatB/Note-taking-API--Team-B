require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let notes = [ // Sample notes data
   {
  id: 1,  title: "The board meeting notes",
  content: "Discuss project milestones and deadlines",
  createdDate: "2026-02-20",
noteCompleted: true
},

{
  id: 2,  title: "Church message",
  content: "Describe the faithfulness of God",  
  createdDate: "2026-03-02",
noteCompleted: false
},

{
 id: 3,  title: "President speech on drug dealers",
  content: "Methods to combat illegal drugs sellers",
  createdDate: "2025-08-20",
noteCompleted: true
}
];

app.get('/notes', (req, res) => {
    res.status(200).json(notes);//send the list of notes as a JSON response
});

app.post('/note-take', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) { // Validate that title and content are provided
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newNote = {  // Create a new note object
        id: notes.length + 1,
        title,
        content,
        createdDate: new Date().toISOString().split('T')[0], // Set the created date to today's date in YYYY-MM-DD format
        noteCompleted: false
    };
    notes.push(newNote); // Add the new note to the notes array
    res.status(201).json(newNote); // Send the newly created note as a JSON response with a 201 status code
}); 

const PORT = process.env.PORT; // Use the PORT from environment variables or default to 3000
app.listen(PORT, () => {
    console.log(`API is live on port ${PORT}`);
});