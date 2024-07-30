- npm init -y
- npm i -D typescript
- npm i -D @types/node
- npm i -D ts-node-dev
- npx tsc --init (npm é para puxar info externas p dentro do nosso node modules e npx é para executar algo dentro do nosso node modules)

Dentro do arquivo tsconfing.json, ajustar as seguintes propriedades:

"target": Alterar para uma versão mais recente do ECMASCRIPT "ES2022"
"rootDir": Apontar o caminho onde vão estar os arquivos typescript "./src" - criar uma pasta na raiz chamada src e colocar os arquivos ts
"outDir": Apontar o caminho onde os arquivo transpilados javascript vão ser destinados. "./dist" - criar uma pasta na raiz chamada dist
"exclude": ["node_modules"]: Garante que não vai transpilar a node modules.

no arquivo package.json:
- trocar caminho da main para "dist/index.js"
- adicionar scripts:
    "start": "node ./dist/index.js",
    "build": "tsc",
    "dev": "ts-node-dev --respawn --transpile-only ./src/index.ts"

void na função significa que ela não tem retorno (não possui return)