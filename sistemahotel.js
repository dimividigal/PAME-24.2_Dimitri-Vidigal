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
        console.log('--->  Digite 111 para fechar')
    }

        //metodo que permite o cliente realizar cadastro    
    cadastrocliente(){
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
        console.log('-----CLIENTE CADASTRADO COM SUCESSO-----')
    }


    cadastrofuncionario(){
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

    }
}

main()