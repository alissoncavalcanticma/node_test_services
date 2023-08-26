# Registry of node-passport project

###### Obs: Copy node project base of node_base_api from suporteb7web/node_base_api
##### Foi usado o site abaixo para gerar hash de senha com 10 rounds:

https://bcrypt-generator.com/

> 

####  Para Encriptar a senha foi usada a lib abaixo:

  - Instalando a lib bcrypt
    `npm i bcrypt`

      - Instalando suporte ao typescript para a lib:
        `npm i -D @types/bcrypt`

####  Para testes foi usada a lib abaixo:

  - Instalando a lib bcrypt
    `npm i jest`

      - Instalando suporte ao typescript para a lib:
        `npm i -D @types/jest`


####  Para testes de requisição foi usada a lib abaixo:

  - Instalando a lib bcrypt
    `npm i supertest`

      - Instalando suporte ao typescript para a lib:
        `npm i -D @types/supertest`

####Instruções:

Para utilizar o coverage com a extensão Jest Runner do vscode com destaque de cor e sem cache, deve-se incluir `--coverage --colors-- nocache` ao fim do script de teste no package.json, conforme abaixo, e a setting no arquivo settings.json do vscode:
  ###### Script de teste do NPM
  ``` json 
  "scripts": {
    "test": "set NODE_ENV=test& jest --runInBand --coverage --colors-- nocache",
    "start-dev": "nodemon -e ts,json src/server.ts"
  }
  ```
  ###### Setting do vscode
 - `"jestrunner.jestCommand": "npm run test",`
Para gerar a porcentagem e highlight do coverage foi usado a extensão **coverage gutters** do vscode

#### Para Realizar testes de requisição foi necessário utilizar o super test, e modificar o nome e a estrutura de nosso server.ts

Alteramos o nome para:
> app.ts

Removemos a linha:

> server.listen(process.env.PORT);

e inserimos:

> export default server;

Em seguida criamos outro server.ts, que importará o agora app.ts.