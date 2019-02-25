---------------------------------------------------------------------------------------------------------------
                            Servidor HTTP em NODE.js
                Retornar em JSON um valor inteiro por extenso dentro intervalo de -99.999 ~ 99.999.
---------------------------------------------------------------------------------------------------------------

    -Exemplo CMD/TERMINAL:
        curl http://localhost:3000/-94587
    -Resultado:
    {
            "extenso": "menos noventa e quatro mil e quinhentos e oitenta e sete"
    }
    
---------------------------------------------------------------------------------------------------------------
                                  Execução com Docker
---------------------------------------------------------------------------------------------------------------
    1° Download Docker: https://hub.docker.com/editions/community/docker-ce-desktop-windows
    2° Em SETTING Habilitar "Expose daemon on TCP://localhost:2375 without LTS

    3º TERMINAL/CMD: 
        3.1° Dentro da pasta Ex: "CD desktop/servidorHTTP-master"
        3.2° Digite o comando: "docker-compose up"
        3.3° Mensagem "server_1  | Server running at http://0.0.0.0:3000" indica servidor está funcionando
        3.4° Para finalizar o servidor digite "CTRL+C"
    
    --
    3.5° Caso execute o comando acima novamente é preciso desligar o container 
      3.5.1° Digite "dcocker ps"
      3.5.2° Copie código "CONTAINER ID" do container com nome "servidorhttp-master_server_1"
      3.5.3° Digite "docker stop /código/"
      3.5.4° Aguarde até aparecer número
      3.5.5° Verifique se container finalizou digitando "dcocker ps", agora não deverá ter nenhum
    --
---------------------------------------------------------------------------------------------------------------
                                  Execução Apenas com Node.JS
---------------------------------------------------------------------------------------------------------------    
    1° Download NODEJS: https://nodejs.org/en/
    2º Com TERMINAL/CMD navegue até a pasta ex "CD desktop/servidorHTTP-master"
    3° Execute o comando para iniciar o servidor "node server.js"
    4° Mensagem "server_1  | Server running at http://0.0.0.0:3000" indica servidor está funcionando
    5° Para finalizar o servidor digite "CTRL+C"

---------------------------------------------------------------------------------------------------------------
                                  Testando
---------------------------------------------------------------------------------------------------------------
    1° Navegador: digite "http://localhost:3000/numero", 
        Número: dentro do intervalo dos inteiros [-99.999 ~99.999];
        Ex: "http://localhost:3000/5" 

    2° Terminal/CMD: digite "curl http://localhost:3000/numero";
        Número: dentro do intervalo dos inteiros [-99.999 ~99.999];
        Ex: "curl http://localhost:3000/5" 
---------------------------------------------------------------------------------------------------------------
