const express = require('express');
const app = express();


app.use(express.json());


app.get('/', (request, response) => {
    return response.json({
        nome: "Guilherme Viega",
        profissao: "Desenvolvedor",
    });
})

app.listen(3333);