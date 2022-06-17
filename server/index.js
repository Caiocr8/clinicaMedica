const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Password@123',
    database: 'clinicamedica'
})

app.post('/create', (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const cpf = req.body.cpf;
    const data = req.body.data;
    const tratamento = req.body.tratamento;

    db.query(
        'INSERT INTO consultas (nome, idade, cpf, data, tratamento) VALUES (?,?,?,?,?)', 
        [nome, idade, cpf, data, tratamento], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        }
    );
});

app.get('/consultas', (req, res) => {
    db.query('SELECT * FROM consultas', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Yey, Your server is running on port 3001")
})

