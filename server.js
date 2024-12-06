// Importando dependências
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config(); // Para carregar variáveis de ambiente

// Configuração do servidor
const app = express();
app.use(express.json());
app.use(cors({ origin: "https://prettyplanner-two.vercel.app/" })); // Permitir requisições do Vercel

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Testando a conexão
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1);
  }
  console.log("Conectado ao banco de dados MySQL!");
});

// Endpoint para salvar agendamentos
app.post("/api/appointments", (req, res) => {
  const { name, service, date, time } = req.body;

  if (!name || !service || !date || !time) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  const sql = "INSERT INTO appointments (name, service, date, time) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, service, date, time], (err) => {
    if (err) {
      console.error("Erro ao salvar agendamento:", err);
      return res.status(500).json({ error: "Erro ao salvar agendamento" });
    }
    res.status(201).json({ message: "Agendamento salvo com sucesso!" });
  });
});

// Inicializando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
