# Pokédex TypeScript Lite - MiniProjeto SCTEC

## 1. Descrição do Projeto

Projeto desenvolvido em TypeScript para consumo da PokeAPI. A aplicação permite buscar Pokémon por nome ou ID, armazená-los em um catálogo local, listar os registros, remover Pokémon e persistir os dados em um arquivo JSON.

---

## 2. Objetivo

Aplicar os conceitos estudados durante o módulo de Node.js e TypeScript, incluindo:

- Classes e objetos;
- Interfaces;
- Arrays e objetos;
- Consumo de API externa;
- Manipulação de arquivos JSON;
- Tratamento de erros;
- Organização em camadas;
- Controle de versão com Git e GitHub.

---

## 3. Tecnologias Utilizadas

- Node.js
- TypeScript
- PokeAPI
- Git
- GitHub
- ESLint
- Prettier

---

## 4. Pré-requisitos

Antes de executar o projeto é necessário ter instalado:

- Node.js
- npm
- Git

Verificar as versões:

```bash
node -v
npm -v
git --version
```

---

## 5. Como Instalar

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd Pokedex-Typescript-Lite---MiniProjeto-SCTEC
```

Instale as dependências:

```bash
npm install
```

---

## 6. Como Executar

Execute o comando:

```bash
npm run dev
```

---

## 7. Funcionalidades

- Buscar Pokémon por nome ou ID na PokeAPI;
- Adicionar Pokémon ao catálogo;
- Evitar registros duplicados;
- Listar Pokémon cadastrados;
- Remover Pokémon do catálogo;
- Salvar dados em arquivo JSON;
- Carregar dados salvos ao iniciar a aplicação;
- Validar respostas da API utilizando Type Guard.

---

## 8. Exemplos de Execução

```text
[INFO] 1 Pokémon(s) carregado(s) do PC Box.
[OK] pikachu adicionado ao catálogo.
[AVISO] charmander já está no catálogo.
[AVISO] pikachu já está no catálogo.

Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

[OK] Pokémon com ID 25 removido do catálogo.

Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85

[ERRO] Pokémon não encontrado: pokemon-inexistente
```

---

## 9. Explicação dos Arquivos

### `src/main.ts`

Arquivo principal da aplicação. Responsável por executar o fluxo do programa.

### `src/models/Pokemon.ts`

Contém as interfaces utilizadas para representar os dados dos Pokémon.

### `src/models/CatalogoPokemon.ts`

Classe responsável por armazenar, listar, adicionar e remover Pokémon do catálogo.

### `src/services/PokeApiService.ts`

Serviço responsável pelas requisições à PokeAPI.

### `src/services/PcBoxService.ts`

Serviço responsável por salvar e carregar os dados do arquivo `pc_box.json`.

### `src/utils/pokemonTypeGuard.ts`

Validação de tipos para garantir que os dados recebidos da API possuem a estrutura esperada.

### `pc_box.json`

Arquivo utilizado para persistência dos Pokémon cadastrados.

---

## 10. Link do Kanban

Trello:

https://trello.com/b/kqWF3uGD/pokedex-typescript-lite

---

## 11. Branches Utilizadas

### `main`

Versão final e estável do projeto.

### `develop`

Integração das funcionalidades desenvolvidas.

### `feat/pokedex`

Desenvolvimento das funcionalidades da aplicação.

### `docs/readme`

Documentação do projeto.
