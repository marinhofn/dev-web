import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Dados iniciais (simulando um banco de dados simples)
let estacionamentos: { id: number, nome: string, capacidade: number }[] = [
  { id: 1, nome: 'Estacionamento A', capacidade: 50 },
  { id: 2, nome: 'Estacionamento B', capacidade: 30 },
  { id: 3, nome: 'Estacionamento C', capacidade: 40 },
];

// Rota para listar todos os estacionamentos
app.get('/estacionamentos', (req: Request, res: Response) => {
  res.json(estacionamentos);
});

// Rota para obter um estacionamento específico por ID
app.get('/estacionamentos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const estacionamento = estacionamentos.find(est => est.id === id);
  if (estacionamento) {
    res.json(estacionamento);
  } else {
    res.status(404).send('Estacionamento não encontrado');
  }
});

// Rota para adicionar um novo estacionamento
app.post('/estacionamentos', (req: Request, res: Response) => {
  const novoEstacionamento = {
    id: estacionamentos.length + 1,
    nome: req.body.nome,
    capacidade: req.body.capacidade
  };
  estacionamentos.push(novoEstacionamento);
  res.status(201).json(novoEstacionamento);
});

// Rota para atualizar um estacionamento existente por ID
app.put('/estacionamentos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const estacionamentoIndex = estacionamentos.findIndex(est => est.id === id);
  if (estacionamentoIndex !== -1) {
    estacionamentos[estacionamentoIndex] = {
      id: id,
      nome: req.body.nome,
      capacidade: req.body.capacidade
    };
    res.json(estacionamentos[estacionamentoIndex]);
  } else {
    res.status(404).send('Estacionamento não encontrado');
  }
});

// Rota para deletar um estacionamento por ID
app.delete('/estacionamentos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  estacionamentos = estacionamentos.filter(est => est.id !== id);
  res.status(204).send();
});

// Rota inicial
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
