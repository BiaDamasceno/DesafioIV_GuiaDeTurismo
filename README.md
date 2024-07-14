# DesafioIV_GuiaDeTurismo

---

# Guia de Turismo Maranhão

Este é um guia turístico online para o estado do Maranhão, Brasil, que permite aos visitantes explorar os destinos mais populares, como São Luís, Lençóis Maranhenses, Alcântara, Carolina, Chapada das Mesas, Atins e Delta do Parnaíba.

## Funcionalidades

- Busca de destinos por nome ou região
- Visualização de detalhes dos destinos, incluindo fotos, descrições e atrativos
- Mapa interativo mostrando a localização dos destinos
- Segurança dos dados dos usuários

## Tecnologias Utilizadas

- *Backend:* Node.js, Express, MySQL
- *Frontend:* HTML, CSS, JavaScript (orientado a objetos)
- *Dependências:* express, mysql2, cors, body-parser
- *Banco de Dados:* MySQL

## Estrutura do Projeto


maranhao-tour-guide/
├── backend/
│   ├── controllers/
│   │   ├── destinationController.js
│   │   └── attractionController.js
│   ├── models/
│   │   ├── db.js
│   │   ├── Destination.js
│   │   └── Attraction.js
│   ├── routes/
│   │   ├── destinations.js
│   │   └── attractions.js
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   ├── images/
│   │   ├── sao_luis.jpg
│   │   ├── lencois_maranhenses.jpg
│   │   └── alcantara.jpg
│   ├── index.html
│   ├── destination.html
│   └── attraction.html
├── .env
├── .gitignore
├── package.json
└── README.md


## Pré-requisitos

- Node.js instalado
- MySQL instalado e rodando

## Configuração do Backend

1. Clone o repositório:
    sh
    git clone https://github.com/seu-usuario/maranhao-tour-guide.git
    cd maranhao-tour-guide/backend
    

2. Instale as dependências:
    sh
    npm install
    

3. Configure o banco de dados MySQL:
    - Crie um banco de dados chamado maranhao_tour_guide.
    - Atualize o arquivo .env com suas credenciais do MySQL:
      env
      DB_HOST=localhost
      DB_USER=seu_usuario
      DB_PASSWORD=sua_senha
      DB_NAME=maranhao_tour_guide
      

4. Inicialize o servidor backend:
    sh
    node server.js
    

## Configuração do Frontend

1. Navegue para o diretório do frontend:
    sh
    cd ../frontend
    

2. Abra o frontend com um servidor de desenvolvimento (ex: live-server):
    sh
    live-server
    
    - Certifique-se de ter o live-server instalado globalmente:
      sh
      npm install -g live-server
      

## Populando o Banco de Dados

Execute os comandos SQL para popular o banco de dados com dados iniciais dos destinos e atrativos.

## Utilização

Abra o navegador e vá para http://127.0.0.1:5500 para acessar o frontend. O backend deve estar rodando em http://localhost:3000.

### Endpoints da API

- *GET* /api/destinations - Retorna todos os destinos
- *GET* /api/attractions - Retorna todos os atrativos

## Contribuição

1. Fork o projeto
2. Crie sua feature branch (git checkout -b feature/nova-feature)
3. Commit suas mudanças (git commit -am 'Adiciona nova feature')
4. Push para a branch (git push origin feature/nova-feature)
5. Crie um novo Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
