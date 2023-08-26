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

####Instruções:

Para utilizar o coverage com a extensão Jest Runner do vscode, deve-se incluir `-- coverage` ao fim do script de teste no package.json e a setting abaixo no arquivo settings.json do vscode:
 - `"jestrunner.jestCommand": "npm run test",`
Para gerar a porcentagem e highlight do coverage foi usado a extensão **coverage gutters** do vscode