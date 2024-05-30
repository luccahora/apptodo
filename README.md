# ToDo List em React Native com Supabase

## Descrição do Projeto

Este projeto é uma aplicação de lista de tarefas (ToDo List) desenvolvida em React Native, utilizando Supabase como backend. A aplicação permite que os usuários criem, visualizem, atualizem e excluam tarefas. O Supabase é utilizado para autenticação de usuários e armazenamento de dados.

## Funcionalidades
- **CRUD de Tarefas**:
  - Criar novas tarefas.
  - Visualizar todas as tarefas do usuário.
  - Excluir tarefas.
- **Sincronização em Tempo Real**: As tarefas são sincronizadas em tempo real com o banco de dados do Supabase.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicações móveis.
- **Supabase**: Backend-as-a-Service que fornece funcionalidades de banco de dados.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- Node.js
- Expo CLI
- Conta no Supabase

## Instalação

1. Configure o Supabase:

   - Crie um novo projeto no [Supabase](https://supabase.io/).
   - Obtenha a URL do seu projeto Supabase e a chave de API (API key).

2. Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais do Supabase:

```
SUPABASE_URL=https://xyzcompany.supabase.co
SUPABASE_ANON_KEY=seu-supabase-anon-key
```
