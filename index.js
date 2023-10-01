const express = require('express');
const app = express();

const PORT = 3000;

// De esta manera siempre debe iniciar el servidor
app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`)
});


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


