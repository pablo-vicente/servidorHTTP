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
Download Docker: https://hub.docker.com/editions/community/docker-ce-desktop-windows
Em SETTING Habilitar "Expose daemon on TCP://localhost:2375 without LTS

TERMINAL/CMD: 
    Dentro da pasta Ex: "CD desktop/servidorHTTP-master"
    Digite o comando: "docker-compose up"
    "server_1  | Server running at http://0.0.0.0:3000" indica servidor está funcionando
    Para finalizado digite "CTRL+C"
    
    --
    Caso execute o comando acima novamente é preciso desligar o container 
    Digite "dcocker ps"
    Copie código "CONTAINER ID" do container com nome "servidorHTTP-master" ou nome da pasta
    Digite "docker stop /código/"
    Aguarde até aparecer número
    Verifique se container finalizou digitando "dcocker ps", agora não deverá ter nenhum
    --
    
Para Usar o Servidor:
    Navegador: digite "http://localhost:3000/numero", número no intervalo ex: http://localhost:3000/5
    
    Terminal/CMD: digite "curl http://localhost:3000/numero "número no intervalo ex: http://localhost:3000/5

                                                                 
    




  





