const { ok } = require("assert");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/atividade", (req, res) => {
  res.json({
    Faculdade: "Uninassau",
    Curso: "Sistemas de Informação",
    Disciplina: "Sistemas Distribuidos",
    Professor: "Edson Motta",
    Alunos: "Claudionor e Júlio",
  });
});

app.get("/", (req, res) => {
  res.json({
    msg: "OK",
  });
});

app.listen(PORT, () => {
  console.log("Escutando na porta: " + PORT);
});
