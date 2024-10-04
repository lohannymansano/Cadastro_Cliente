const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

//app.

app.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'cadastro.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});