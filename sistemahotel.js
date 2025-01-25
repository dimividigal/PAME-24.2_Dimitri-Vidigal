//utilizar para fazer perguntas
var requisicao = require('readline-sync')

class cliente{
    constructor(id_cliente,nome,data_nascimento,cpf,email,senha){
        //classe cliente e seus atributos
        this.id_cliente=id_cliente
        this.nome=nome
        this.data_nascimento=data_nascimento
        this.cpf=cpf
        this.email=email
        this.senha=senha
    }
}

class funcionario{
    constructor(id_funcionario,nome,cpf,email,senha){
        //classe funcionario e seus atributos
        this.id_funcionario=id_funcionario
        this.nome=nome
        this.cpf=cpf
        this.email=email
        this.senha=senha

    }

}

class reserva{
    constructor(id_reserva,id_cliente,status,checkin,checkout){
        //classe reserva e seus atributos
        this.id_reserva=id_reserva
        this.id_cliente=id_cliente
        this.status=status
        this.checkin=checkin
        this.checkout=checkout
    }


}

class quartos{
    constructor(ncamas,preco,quantidade,nome,descricao){
        //classe quartos e seus atributos
        this.ncamas=ncamas
        this.preco=preco
        this.quantidade=quantidade
        this.nome=nome
        this.descricao=descricao

    }
}

class sistema{
    constructor(listaclientes,listafuncionarios,listareservas,listaquartos,idf,idc,idr){
        //classe sistema e seus atributos
        this.listaclientes=listaclientes
        this.listafuncionarios=listafuncionarios
        this.listareservas=listareservas
        this.listaquartos=listaquartos
        this.idc=idc
        this.idf=idf
        this.idr=idr
        this.novoIDC = function() {
            console.log(idc)
        }
    }

        //print que permite o usuário vizualizar suas opcoes de acao
    paginaprincipal(){
        console.log('BEM VINDO AO SISTEMA DO HOTEL F-LUXO!')
        console.log('Como podemos ajuda-lo?\n')
        console.log('--->  Digite 1 para cadastrar um cliente.')
        console.log('--->  Digite 2 para cadastrar um funcionario.')
        console.log('--->  Digite 3 para logar como cliente')
        console.log('--->  Digite 4 para logar como funcionario')
        console.log('--->  Digite 111 para fechar')
    }
        //print que permite o cliente vizualizar as opcoes
    paginacliente(){
        console.log('Como podemos ajuda-lo?\n')
        console.log('--->  Digite 1 para ver meu dados.')
        console.log('--->  Digite 2 para ver lista de quartos.')
        console.log('--->  Digite 3 para fazer reserva')
        console.log('--->  Digite 4 para cancelar reserva')
        console.log('--->  Digite 5 para ver suas reservas')
        console.log('--->  Digite 6 para sair')
    }

    //print que permite o funcionario vizualizar as opcoes
    paginafuncionario(){
        console.log('Como podemos ajuda-lo?\n')
        console.log('--->  Digite 1 para ver meu dados.')
        console.log('--->  Digite 2 para ver lista de quartos.')
        console.log('--->  Digite 3 para ver lista de reservas')
        console.log('--->  Digite 4 para mudar status de reserva')
        console.log('--->  Digite 5 para ver lista de clientes')
        console.log('--->  Digite 6 para adicionar um quarto')
        console.log('--->  Digite 7 para sair')
    }





        //metodo que permite o cliente realizar cadastro    
    cadastrocliente(){
        console.log('TEM CERTEZA QUE DESEJAS REALIZAR UM CADASTRO?')
        console.log('DIGITE s/n')
        let escolha=requisicao.question()
        if (escolha == 's'){
            console.log('Qual é o nome do cliente?')
            let nomecliente = requisicao.question()
            console.log('Qual é a data de nascimento?')
            let nascimento = requisicao.question()
            console.log('Qual e o cpf?')
            let cpf=requisicao.question()
            console.log('Digite seu email?')
            let email=requisicao.question()
            console.log('Digite sua senha')
            let senha=requisicao.question()
            //cria o cliente com as informacoes
            let cliente_cadastrado = new cliente(this.idc,nomecliente,nascimento,cpf,email,senha)
            //cria um novo id
            this.idc=this.idc+1
            //cadastra o cliente
            this.listaclientes.push(cliente_cadastrado)
            //imprime para que seja possivel vizualizar (retirar)
            console.log(this.listaclientes)
            //Mensagagem de cadastrado com sucesso!
            console.log('\n \n-----CLIENTE CADASTRADO COM SUCESSO-----\n \n')
    }
    }


    cadastrofuncionario(){
        //pergunta se o usuario deseja continuar, para evitar eventuais clicks errados
        console.log('TEM CERTEZA QUE DESEJAS REALIZAR UM CADASTRO?')
        console.log('DIGITE s/n')
        let escolha=requisicao.question()
        if (escolha == 's'){
            //pega as informacoes e as guarda em variaveis
            console.log('Qual é o nome do funcionario?')
            let nomefuncionario = requisicao.question()
            console.log('Qual o seu cpf?')
            let cpf = requisicao.question()
            console.log('Digite seu email?')
            let email = requisicao.question()
            console.log('Digite sua senha')
            let senha = requisicao.question()
            //cria o funcionario novo com as informacoes
            let funcionario_cadastrado = new funcionario(this.idf,nomefuncionario,cpf,email,senha)
            //cria um novo id para o funcionario
            this.idf=this.idf+1
            //cadastra o funcionario na lista
            this.listafuncionarios.push(funcionario_cadastrado)
            //imprime a lista de funcionarios (retirar)
            console.log(this.listafuncionarios)
            console.log('\n \n-----FUNCIONARIO CADASTRADO COM SUCESSO-----\n \n')
         }
    }


    logincliente(){ 
        console.log('TEM CERTEZA QUE DESEJAS REALIZAR UM LOGIN?')
        console.log('DIGITE s/n')
        let escolha=requisicao.question()
        if(escolha == 's'){
        //copia a lista do objeto em outra lista para facilitar o trabalho
        let list=this.listaclientes
        
        //confere se ha clientes cadastrados
        if (parseFloat(list.length) == 0){
            console.log('\n \n NAO HA CLIENTES CADASTRADOS \n \n')
            return false

        }
        
        //caso contrario iremos pedir a senha e cadastro
        else{
            //posicao do while comeca em 0
            let pos = 0
            //pergunta o nome do usuario
            console.log('Qual o seu CPF?')
            let cpf = requisicao.question()
            //while para percorrer a lista em busca do cpf em questao
            while (pos < parseFloat(list.length) ){
                //confere se o cpf em questao existe
                if(cpf == list[pos].cpf){
                    console.log('Boa tarde cliente: '+ list[pos].nome)
                    console.log('DIGITE SUA SENHA: ')
                    let password = requisicao.question()
                    
                    if (password == list[pos].senha){
                        console.log('\n \n Bem vindo: ' + list[pos].nome + '\n\n')
                        return list[pos].id_cliente
                    }
                    else{
                        console.log('SENHA INCORRETA')
                        return false
                    }
                    
                }
                pos = pos+1
            }
            console.log( 'CPF nao encontrado')
            return false
        }
        }
        else{
            return false
        }
    }

    loginfuncionario(){
        console.log('TEM CERTEZA QUE DESEJAS REALIZAR UM LOGIN?')
        console.log('DIGITE s/n')
        let escolha=requisicao.question()
        if(escolha == 's'){
        //copia a lista do objeto em outra lista para facilitar o trabalho
        let list=this.listafuncionarios
        
        //confere se ha funcionarios cadastrados
        if (parseFloat(list.length) == 0){
            console.log('\n \n NAO HA FUNCIONARIOS CADASTRADOS \n \n')
            return false

        }
        
        //caso contrario iremos pedir a senha e cadastro
        else{
            //posicao do while comeca em 0
            let pos = 0
            //pergunta o nome do usuario
            console.log('Qual o seu CPF?')
            let cpf = requisicao.question()
            //while para percorrer a lista em busca do cpf em questao
            while (pos < parseFloat(list.length) ){
                //confere se o cpf em questao existe
                if(cpf == list[pos].cpf){
                    console.log('Boa tarde funcionario: '+ list[pos].nome)
                    console.log('DIGITE SUA SENHA: ')
                    let password = requisicao.question()
                    //se a senha estiver correta ele loga
                    if (password == list[pos].senha){
                        console.log('\n \n Bem vindo: ' + list[pos].nome + '\n\n')
                        return list[pos].id_funcionario
                    }
                    //se a senha estiver errada retorna falso
                    else{
                        console.log('SENHA INCORRETA')
                        return false
                    }
                    
                }
                pos = pos+1
            }
            //caso o cpf em questao nao exista
            console.log( 'CPF nao encontrado')
            return false
        }
        }
        else{
            return false
        }

    }

    clientedados(id){
        //id enumarado, imprime o cliente da posicao do id dele
        console.log(this.listaclientes[id])
    }

    funcionariodados(id){
        //id enumarado, imprime o funcionario da posicao do id dele
        console.log(this.listafuncionarios[id])

    }

    verquartos(){
        //retorna a lista
        return(this.listaquartos)
    }

    verreservas(){
        //retorna a lista
        return(this.listareservas)
    }

    verclientes(){
        //retorna a lista
        return(this.listaclientes)
    }
 

}


function main(){

    let escolha = 1
    //cria o sistema, com as suas listas e IDs zerados
    let system = new sistema([],[],[],[],0,0,0)

        while (escolha != 111){
        //imprime as opcoes do client
        system.paginaprincipal()

        //pergunta o que ele deseja fazer
        escolha = requisicao.question()

        //cadastro de cliente
        if (escolha==1){
            //roda o metodo de cadastro de clientes
            system.cadastrocliente()
        }

        //cadastro de funcionario
        if (escolha==2){
            //roda o metodo de cadastro de funcionarios
            system.cadastrofuncionario()
        }
        
        //login cliente
        if (escolha == 3){
            //pega o return do login
            let resposta = system.logincliente()
            //ve se deu falso
            if(resposta !== false){
                let escolha = 0
                while(escolha != 6){
                    system.paginacliente()
                    escolha=requisicao.question()   
                    
                    if (escolha == 1){
                    //com o id na resposta, imprime os dados apenas do cliente com aquele id
                        system.clientedados(resposta)
                    }
                    if (escolha == 2){
                        //funcao que imprime os quartos
                        if (parseFloat(system.verquartos().length) == []){
                            console.log('\n\n NAO HA QUARTOS CADASTRADOS\n\n')
                        }
                        else{
                            console.log(system.verquartos())
                        }
                    }
                    if (escolha == 3){
                        //fazer reserva
                        
                    }

                    if (escolha == 4){
                        //cancelar reserva
                    }

                    if (escolha == 5){
                        //ver reservas

                    }

                    
                    //caso o cliente desejese sair
                    if (escolha==6){
                        break
                    }

                }
            }

            

        }

        //login funcionario
        if (escolha == 4){
            //pega o return do login
            let resposta = system.loginfuncionario()
            //ve se deu falso

            if(resposta !== false){
                let escolha = 0
                while(escolha != 7){
                    system.paginafuncionario()
                    escolha=requisicao.question()

                    if (escolha == 1){
                        //com o id na resposta, imprime os dados apenas do funcionario com aquele id
                        system.funcionariodados(resposta)
                        }

                    if (escolha == 2){
                        if (parseFloat(system.verquartos().length) == []){
                            console.log('\n\n NAO HA QUARTOS CADASTRADOS\n\n')
                        }
                        else{
                            console.log(system.verquartos())
                        }
                    }
                    
                    if (escolha == 3){
                        //imprime a lista de reservas
                        //confere antes se existe reservas
                        if (parseFloat(system.verreservas().length) == []){
                            console.log('\n\n NAO HA RESERVAS CADASTRADAS\n\n')
                        }
                        else{
                            console.log(system.verreservas())
                        }
                    }

                    if (escolha == 4){
                        //muda o status de alguma reserca
                    }

                    if (escolha == 5){
                        //imprime a lista de clientes
                        if (parseFloat(system.verclientes().length) == []){
                            console.log('\n\n NAO HA CLIENTES CADASTRADOS\n\n')
                        }
                        else{
                            console.log(system.verclientes())
                        }

                    }

                    if (escolha == 6){
                        //adiciona um quarto
                    }

                    if (escolha==7){
                        //sai do laco, saindo do login do funcionario
                        break
                    }

                }
            }



        }

    }
}

main()