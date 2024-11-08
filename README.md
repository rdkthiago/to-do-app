# Aplicação Front-end React: Lista de Tarefas e Busca no GitHub

Este é o front-end de uma aplicação desenvolvida em React que permite o gerenciamento de uma lista de tarefas e inclui uma funcionalidade extra para buscar repositórios públicos de um usuário no GitHub utilizando a API pública do GitHub.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Material-UI**: Biblioteca de componentes para estilização do front-end.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **React Router**: Biblioteca para navegação entre páginas no React.

## Funcionalidades

### Parte 1: Lista de Tarefas

- **Adicionar Tarefa**: Formulário para adicionar uma nova tarefa.
- **Listar Tarefas**: Exibe a lista de tarefas, permitindo marcar como completa ou incompleta.
- **Deletar Tarefa**: Botão para remover uma tarefa da lista.
- **Atualizar Status**: Permite alternar o status de uma tarefa entre completa e incompleta.

### Parte 2: Busca de Repositórios no GitHub

- **Campo de Busca**: Permite inserir o nome de um usuário do GitHub.
- **Listagem de Repositórios**: Exibe os repositórios públicos do usuário informado.

## Pré-requisitos

- Node.js e npm instalados.
- Back-end da aplicação deve estar configurado e em execução (verifique o README do back-end para instruções).

## Instalação

1. Clone o repositório:

```bash
git clone 

## Instale as dependências:
npm install

#Inicie o servidor de desenvolvimento:
npm start
A aplicação estará disponível em http://localhost:3000.

## Configuração da API
A URL da API back-end deve ser configurada no arquivo src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Altere para a URL da sua API
});

export default api;
