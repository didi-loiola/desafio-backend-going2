## Fullstack Challenge going two

## Iniciando 

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.

### Pré-requisitos

- node v16.8.0
- npm 7.21.0
- git version 2.17.1

### Links úteis

<a href="https://nodejs.org/en/">Download Node JS</a>

<a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">Download Git</a>

Digite os comandos abaixo para iniciar o projeto

    git clone https://github.com/didi-loiola/desafio-backend-going2.git

    cd desafio-backend-going2

    yarn install

Para iniciar o servidor digite o comando abaixo.

    npm run dev

Agora no seu navegador digite o seguinte endereço.

    http://localhost:4000

### Objetivo

Desenvolver uma Api que encurte uma url qualquer.

## API / Back-End

### Modelo de Dados

As seguintes rotas estão presentes no desafio.

Endpoints
    
    GET / 
        - Retorna uma mensagem de boas vindas

    POST /encode
        - Vai encurtar a url qualquer
    
    Dados que devem ser enviados

        {
            url: url_qualquer
        }
    Resposta da requsição
        201
            {
                "message": "Url encurtada com sucesso",
                "encoded": "http://localhost:4000/c038df9e51501dd37449a864c6bcd5ed"
            }

        400
           {
                "message": "Algo deu errado, verifique se você informou o parâmetros corretos",
                "error": 400
            }

    POST /encode

    Vai retorna a url decodificada

    Dados que devem ser enviados
    
    {
        "encodedUrl": "http://localhost:4000/ee3ecf487e2db643a83c52f58d86811a"
    }

    Reposta da requisição
    
    200
        {
            "shorcut-url": {
            "encoded_url": "http://localhost:4000/ee3ecf487e2db643a83c52f58d86811a",
            "decoded_url": "https://stackoverflow.com/questions/58965011/sequelizeconnectionerror-self-signed-certificate"
        }
    400
        {
            "message": "Algo deu errado, verifique se você informou o parâmetros corretos",
            "error": 400
        }
    
    GET /redirect/:code
    
    Esse endpoint vai redirecionar para a url original