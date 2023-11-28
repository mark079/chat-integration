const express = require('express');
const chat = require("./chat-integration");

const app = express();
const port = 3001;

app.use(express.json());
// Defina uma rota básica
app.post('/', async (req, res) => {
    const { mensagem } = req.body;
    console.log('Dados recebidos:', mensagem);
    const retorno = await chat(mensagem);
    console.log('retorno',retorno);
    const bracket1 = retorno.indexOf('[');
    const bracket2 = retorno.indexOf(']');
    const array = retorno.substring(bracket1, bracket2 + 1);
    console.log('array', array);
    const json = JSON.parse(array);
    console.log('jsonJ', JSON.parse(array));
    res.json({ ...json });
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});