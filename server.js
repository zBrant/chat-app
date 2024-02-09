const express = require('express');
const path = require('path');

const app = express();

// Configurar uma rota para servir o arquivo index.html
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Configurar uma rota para servir o arquivo app.js
app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'));
});

// Iniciar o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
