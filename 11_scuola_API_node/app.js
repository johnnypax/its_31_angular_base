const express = require('express');
const bodyParser = require('body-parser');
const Studente = require('./studente.model');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Dati di esempio
let studenti = [
  new Studente('Giulia', 'Verdi', 'A001', '1999-05-12', 'Ingegneria Informatica'),
  new Studente('Luca', 'Bianchi', 'A002', '2000-11-03', 'Economia'),
  new Studente('Sara', 'Rossi', 'A003', '1998-07-21', 'Medicina')
];

// POST - Aggiungi uno studente
app.post('/studenti', (req, res) => {
  const { nome, cognome, matricola, data_nas, corso } = req.body;
  if (!matricola) {
    return res.status(400).json({ error: 'Matricola obbligatoria' });
  }
  if (studenti.find(s => s.matricola === matricola)) {
    return res.status(409).json({ error: 'Matricola già esistente' });
  }
  const nuovoStudente = new Studente(nome, cognome, matricola, data_nas, corso);
  studenti.push(nuovoStudente);
  res.status(201).json(nuovoStudente);
});

// GET ALL - Ottieni tutti gli studenti
app.get('/studenti', (req, res) => {
  res.json(studenti);
});

// GET - Ottieni uno studente per matricola
app.get('/studenti/:matricola', (req, res) => {
  const studente = studenti.find(s => s.matricola === req.params.matricola);
  if (!studente) {
    return res.status(404).json({ error: 'Studente non trovato' });
  }
  res.json(studente);
});

// DELETE - Elimina uno studente per matricola
app.delete('/studenti/:matricola', (req, res) => {
  const index = studenti.findIndex(s => s.matricola === req.params.matricola);
  if (index === -1) {
    return res.status(404).json({ error: 'Studente non trovato' });
  }
  const rimosso = studenti.splice(index, 1)[0];
  res.json(rimosso);
});

app.listen(port, () => {
  console.log(`✅ Server avviato su http://localhost:${port}`);
});
