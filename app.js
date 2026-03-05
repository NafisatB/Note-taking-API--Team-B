require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors('*'));

let noteTaking = [
    {
        id: 1, 
        title: "The board meeting notes",
        content: "Discuss project milestones and deadlines",
        createdDate: "2026-02-20",
        noteCompleted: true
    },

    {
        id: 2, 
        title: "Church message",
        content: "Describe the faithfulness of God", 
        createdDate: "2026-03-02",
        noteCompleted: false
    },


    {
        id: 3,
        title: "President speech on drug dealers",
        content: "Methods to combat illegal drugs sellers",
        createdDate: "2025-08-20",
        noteCompleted: true

    }
];

app.get ("/note-take", (req, res) =>{
    res.status(201).json(noteTaking);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server on port ${PORT}`));