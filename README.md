# DesafioIV_GuiaDeTurismo

---

# Guia de Turismo Maranhão

![telaInicial](https://github.com/user-attachments/assets/3c69a8cd-646c-485c-88c1-d2e3acdff793)

![animacao](https://github.com/user-attachments/assets/48b23e6a-b93c-4b6c-ab76-481d63c44b35)
Video da aplicação: ![Click aqui!](https://github.com/user-attachments/assets/0652d155-91ac-47e0-93e7-ae12f030ab97)


Este é um guia turístico online para o estado do Maranhão, Brasil, que permite aos visitantes explorar os destinos mais populares, como São Luís, Lençóis Maranhenses, Alcântara, Carolina, Chapada das Mesas, Atins e Delta do Parnaíba.

## Funcionalidades

- Busca de destinos por nome ou região
- Visualização de detalhes dos destinos, incluindo fotos, descrições e atrativos
- Mapa interativo mostrando a localização dos destinos
- Segurança dos dados dos usuários
![cidades](https://github.com/user-attachments/assets/2c210e7d-42aa-421c-b3df-5618025afb7f)
![cidades2](https://github.com/user-attachments/assets/b7dfbae7-95de-46a6-b47a-c8aa497432e1)

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

![pontosTuristicos](https://github.com/user-attachments/assets/9f9e1d1e-fb2d-4a23-b888-414b4b3a9c92)
![pontosTuristicos1](https://github.com/user-attachments/assets/b532069b-efe8-43f1-9fd9-d412c280a0e1)

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

## Comando SQL

sql
-- Criar a tabela 'destinations'
CREATE TABLE destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_path VARCHAR(255),
    latitude DECIMAL(9, 6),
    longitude DECIMAL(9, 6)
);

-- Criar a tabela 'attractions'
CREATE TABLE attractions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    destination_id INT,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_path VARCHAR(255),
    latitude DECIMAL(9, 6),
    longitude DECIMAL(9, 6),
    FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
);

-- Inserir dados na tabela 'destinations'
INSERT INTO destinations (name, description, image_path, latitude, longitude) VALUES
('São Luís', 'Capital do Maranhão, conhecida por seu centro histórico e cultura rica.', 'images/sao_luis.jpg', -2.530730, -44.306800),
('Lençóis Maranhenses', 'Parque Nacional famoso por suas dunas de areia branca e lagoas de água doce.', 'images/lencois_maranhenses.jpg', -2.482790, -43.124020),
('Alcântara', 'Cidade histórica conhecida por sua arquitetura colonial e ruínas.', 'images/alcantara.jpg', -2.409420, -44.406400),
('Carolina', 'Porta de entrada para o Parque Nacional da Chapada das Mesas.', NULL, -7.335000, -47.470600),
('Chapada das Mesas', 'Parque Nacional famoso por suas formações rochosas e cachoeiras.', NULL, -7.037500, -46.615800),
('Atins', 'Pequena vila de pescadores, porta de entrada para os Lençóis Maranhenses.', NULL, -2.453060, -42.778200),
('Delta do Parnaíba', 'Área de proteção ambiental com ilhas, manguezais e vida selvagem.', NULL, -2.863410, -41.708500);

-- Inserir dados na tabela 'attractions'
INSERT INTO attractions (destination_id, name, type, description, image_path, latitude, longitude) VALUES
(1, 'Centro Histórico de São Luís', 'Monumento', 'Patrimônio Mundial da UNESCO com arquitetura colonial.', 'images/centro_historico_sao_luis.jpg', -2.531980, -44.302750),
(2, 'Lagoa Azul', 'Lagoa', 'Uma das lagoas mais belas dos Lençóis Maranhenses.', 'images/lagoa_azul.jpg', -2.531450, -43.155560),
(3, 'Ruínas de Alcântara', 'Monumento', 'Ruínas de igrejas e construções coloniais.', 'images/ruinas_alcantara.jpg', -2.409160, -44.406800),
(4, 'Cachoeira da Pedra Caída', 'Cachoeira', 'Impressionante cachoeira na Chapada das Mesas.', 'images/cachoeira_pedra_caida.jpg', -7.192860, -47.278000),
(5, 'Formação Pedra Furada', 'Formação Rochosa', 'Famosa formação rochosa na Chapada das Mesas.', 'images/pedra_furada.jpg', -7.027210, -46.614610),
(6, 'Praia de Atins', 'Praia', 'Praia tranquila e bonita na vila de Atins.', 'images/praia_atins.jpg', -2.459850, -42.782860),
(7, 'Ilha das Canárias', 'Ilha', 'Uma das ilhas mais visitadas do Delta do Parnaíba.', 'images/ilha_canarias.jpg', -2.863540, -41.705740);

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
