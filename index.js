const express = require('express');
const app = express();

app.use(express.json()) // Este modulo incluido en express contiene la manera de utilizar el body-parser

// Arreglo de objetos para realizar pruebas
let notes = [
    {
        id: 1,
        content: 'Me tengo que suscribir a @midudev en YouTube',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Tengo que estudiar las clases del FullStack Bootcamp',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'Repasar los retos de JS de midudev',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
];

app.get('/', (req, res) => {
    res.send(`<h1><center>Servidor levantado en el puerto ${PORT}</center></h1>`)
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)    // Convertimos a numero y pasamos el id al params
    const note = notes.find(note => note.id === id);

    if (note) {
        res.json(note)

    } else {
        res.status(404).end();
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
})

app.post('/api/notes', (req, res) => {
    const note = req.body
    // Recuperamos las ids para poder crear nuevas
    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)
    // Creamos el nuevo objeto 
    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toISOString()
    }

    // agregamos la newNote a la lista de notes
    notes = [...notes, newNote]

    res.json(newNote)
})

const PORT = 3000;
// De esta manera siempre debe iniciar el servidor
app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`)
});