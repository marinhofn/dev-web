# dev-web
Repositório dedicado à disciplina de Princípios de Desenvolvimento Web

# Instalação

## Instruções de Instalação

A aplicação utiliza **Docker Compose** para orquestrar o ambiente, com um banco de dados **PostgreSQL**. A seguir estão as etapas para instalar e configurar o projeto.

### 1. Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 2. Clonando o Repositório

Faça o clone do repositório da aplicação:

```bash
git clone <URL-do-repositorio>
cd <nome-do-repositorio>
```

### 3. Configurando o Arquivo `.env`

A aplicação requer um arquivo `.env` para configurar as variáveis de ambiente do banco de dados. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```bash
# Configurações do banco de dados PostgreSQL
POSTGRES_USER=<seu_usuario_postgres>
POSTGRES_PASSWORD=<sua_senha_postgres>
POSTGRES_DB=<nome_do_banco_de_dados>
DB_HOST=db
DB_PORT=5432
```

Certifique-se de ajustar os valores conforme necessário.

### 4. Subindo os Containers com Docker Compose

Agora, você pode utilizar o Docker Compose para subir o ambiente. Isso irá iniciar tanto o banco de dados PostgreSQL quanto a aplicação.

```bash
docker-compose up --build
```

Esse comando irá:

- **Construir** a imagem da aplicação e instalar as dependências.
- **Subir** os containers para o banco de dados PostgreSQL e a aplicação.

### 5. Acessando a Aplicação

Após a inicialização, você pode acessar a aplicação web no navegador:

```bash
http://localhost:3000
```

O banco de dados estará acessível internamente pelos serviços da aplicação no endereço `db:5432`.

### 6. Encerrando os Containers

Para parar e remover os containers:

```bash
docker-compose down
```

Isso encerrará todos os containers, mas as informações persistentes no banco de dados serão mantidas.

---

A aplicação agora estará pronta para uso, e as principais funcionalidades poderão ser acessadas e testadas.