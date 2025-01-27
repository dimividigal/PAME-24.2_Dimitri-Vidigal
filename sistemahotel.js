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
    constructor(id_reserva,id_cliente,status,checkin,checkout,quarto){
        //classe reserva e seus atributos
        this.id_reserva=id_reserva
        this.id_cliente=id_cliente
        this.status=status
        this.checkin=checkin
        this.checkout=checkout
        this.quarto=quarto
    }


}

class quartos{
    constructor(id_quarto,ncamas,preco,quantidade,nome,descricao){
        //classe quartos e seus atributos
        this.id_quarto=id_quarto
        this.ncamas=ncamas
        this.preco=preco
        this.quantidade=quantidade
        this.nome=nome
        this.descricao=descricao

    }
}

class avaliacoes{
    constructor(estrelas,quarto,descricao,avaliador){
        //classe avaliacoes com seus atributos
        this.estrelas=estrelas
        this.quarto=quarto
        this.descricao=descricao
        this.avaliador=avaliador
    }
}


function verificar_numero(){
    
    while (true){
        let numero = requisicao.question()
        //confere se o numero digitado é um numero realmente
        if (!isNaN(numero) && numero.length > 0 ){
            //retorna em forma de numero
            return parseFloat(numero)}
        else{
            //caso o numero nao esteja de acordo, pede para repetir
            console.log('DIGITE UM NUMERO VALIDO')
            }
        }
        
    }

function verificar_nome(){

    while (true){
        let numero = requisicao.question()
        //confere se o nome digitado tem ao menos uma palavra
        if (numero.length > 0 ){
            //retorna em forma de string
            return numero}
        else{
            //caso o nome nao esteja de acordo, pede para repetir
            console.log('DIGITE UM NOME VALIDO')
            }
        }
        
    }

function verificar_cpf(){

    while (true){
        let numero = requisicao.question()
        //confere se o numero digitado é um numero realmente e se tem tamanho de cpf
        if (!isNaN(numero) && numero.length == 11 ){
            //retorna em forma de numero
            return numero}
        else{
            //caso o cpf nao esteja de acordo, pede para repetir
            console.log('DIGITE UM CPF VALIDO')
            }
        }
        
    }

 function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
    }

function verificar_data(){

    while (true){
        let numero = requisicao.question()
        //confere se o numero digitado é um numero realmente e se tem tamanho de cpf
        if (isDateValid(numero)){
            //retorna em forma de numero
            return numero}
        else{
            //caso o cpf nao esteja de acordo, pede para repetir
            console.log('DIGITE UMA DATA VALIDA')
            console.log('FORMATO: MM/DD/AAAA')
            }
        }

}

function verificar_senha(){

    while (true){
        let numero = requisicao.question()
        //confere se o numero digitado é um numero realmente e se tem tamanho de cpf
        if (numero.length>4){
            //retorna em forma de numero
            return numero}
        else{
            //caso o cpf nao esteja de acordo, pede para repetir
            console.log('DIGITE UMA SENHA VALIDA')
            }
        }

}

function verificar_email(){

    while (true){
        let numero = requisicao.question()
        //confere se o numero digitado é um numero realmente e se tem tamanho de cpf
        if (numero.includes('@') && numero.includes('.')){
            //retorna em forma de numero
            return numero}
        else{
            //caso o cpf nao esteja de acordo, pede para repetir
            console.log('DIGITE UM EMAIL VALIDO')
            }
        }
        
    }

    


class sistema{
    constructor(listaclientes,listaclientessegura,listafuncionarios,listareservas,listaquartos,listaavaliacoes,idf,idc,idr,idq){
        //classe sistema e seus atributos
        this.listaclientes=listaclientes
        //lista para salvar clientes, porem sem suas senhas para os funcionariso verem
        this.listaclientessegura=listaclientessegura
        this.listafuncionarios=listafuncionarios
        this.listareservas=listareservas
        this.listaquartos=listaquartos
        this.listaavaliacoes=listaavaliacoes
        this.idc=idc
        this.idf=idf
        this.idr=idr
        this.idq=idq
        
    }

        //print que permite o usuário vizualizar suas opcoes de acao
    paginaprincipal(){
        console.log('Como podemos ajuda-lo?\n')
        console.log('--->  Digite 1 para cadastrar um cliente.')
        console.log('--->  Digite 2 para cadastrar um funcionario.')
        console.log('--->  Digite 3 para logar como cliente')
        console.log('--->  Digite 4 para logar como funcionario')
        console.log('--->  Digite 5 para fechar')
    }
        //print que permite o cliente vizualizar as opcoes
    paginacliente(){
        console.log('Como podemos ajuda-lo?\n')
        console.log('--->  Digite 1 para ver meu dados.')
        console.log('--->  Digite 2 para ver lista de quartos.')
        console.log('--->  Digite 3 para fazer reserva')
        console.log('--->  Digite 4 para cancelar reserva')
        console.log('--->  Digite 5 para ver suas reservas')
        console.log('--->  Digite 6 para ver avaliacoes')
        console.log('--->  Digite 7 para realizar avaliacoes')
        console.log('--->  Digite 8 para alterar seus dados')
        console.log('--->  Digite 9 para sair')
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
        console.log('--->  Digite 7 para alterar seus dados')
        console.log('--->  Digite 8 para excluir um quarto')
        console.log('--->  Digite 9 para modificar um quarto')
        console.log('--->  Digite 10 para sair')
    }





        //metodo que permite o cliente realizar cadastro    
    cadastrocliente(){
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }
        if (escolha == 's'){
            console.log('Qual é o nome do cliente?')
            let nomecliente = verificar_nome()
            console.log('Qual é a data de nascimento?')
            console.log('FORMATO: MM/DD/AAAA')
            let nascimento = verificar_data()
            console.log('Qual e o cpf? (11 numeros)')
            console.log('exemplo: 00000000000')
            let cpf = verificar_cpf()
            console.log('Digite seu email?')
            let email = verificar_email()
            console.log('Digite sua senha')
            console.log('LEMBRETE: A SENHA DEVE CONTER NO MINIMO 5 CARACTERES')
            let senha= verificar_senha()
            //cria o cliente com as informacoes
            let cliente_cadastrado = new cliente(this.idc,nomecliente,nascimento,cpf,email,senha)
            let cliente_cadastrado_seguro = new cliente(this.idc,nomecliente,nascimento,'(oculto)',email,'(oculto)')
            //cria um novo id
            this.idc=this.idc+1
            //cadastra o cliente
            this.listaclientes.push(cliente_cadastrado)
            //adiciona ele na lista que nao contem senhas
            this.listaclientessegura.push(cliente_cadastrado_seguro)
        
            //Mensagagem de cadastrado com sucesso!
            console.log('\n \n-----CLIENTE CADASTRADO COM SUCESSO-----\n \n')
    }
    }


    cadastrofuncionario(){
        //pergunta se o usuario deseja continuar, para evitar eventuais clicks errados
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }
        if (escolha == 's'){
            //pega as informacoes e as guarda em variaveis
            console.log('Qual é o nome do funcionario?')
            let nomefuncionario = verificar_nome()
            console.log('Qual o seu cpf? (Digite sem pontos ou tracos)')
            console.log('exemplo: 00000000000')
            //verifica se o cpf esta de acordo
            let cpf = verificar_cpf()
            console.log('Digite seu email')
            //verifica se o email esta de acordo
            let email = verificar_email()
            console.log('Digite sua senha')
            let senha = verificar_senha()
            //cria o funcionario novo com as informacoes
            let funcionario_cadastrado = new funcionario(this.idf,nomefuncionario,cpf,email,senha)
            //cria um novo id para o funcionario
            this.idf=this.idf+1
            //cadastra o funcionario na lista
            this.listafuncionarios.push(funcionario_cadastrado)

            console.log('\n \n-----FUNCIONARIO CADASTRADO COM SUCESSO-----\n \n')
         }
    }


    logincliente(){ 
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }
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
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }
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
        //retorna a lista sem as senhas dos clientes
        return(this.listaclientessegura)
    }

    adicionarquarto(){
        //confere se o usuario realmente quer fazer isso
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n') 
                console.log('DIGITE: s/n')
            }
        }
        if (escolha == 's'){
            //pega as informacoes e as guarda em variaveis
            let id_quarto=this.idq
            console.log('Quantas camas tem o quarto')
            //funcao que verifica se quantidade de camas é realmente um numero
            let cama = verificar_numero()
            console.log('Qual o preco/noite?')
            //funcao que verifica se preço é realmente um numero
            let precos = verificar_numero()
            console.log('Quantos desses quartos temos?')
            let qtd = verificar_numero()
            //funcao que verifica se quantidade é realmente um numero
            console.log('Qual o nome do quarto')
            let name = verificar_nome()
            console.log('Digite uma descricao para o quarto')
            let descricao = requisicao.question()
            //cria o quarto novo com as informacoes
            let quarto_cadastrado = new quartos(id_quarto,cama,precos,qtd,name,descricao)
            this.listaquartos.push(quarto_cadastrado)
            this.idq=this.idq+1
            
            console.log('\n \n-----QUARTO CADASTRADO COM SUCESSO-----\n \n')
        }
    }

    fazerreserva(id){
        if (parseFloat(this.listaquartos.length)==0){
            console.log('\n\n NAO HA QUARTOS CADASTRADOS PARA RESERVA \n\n')
            return 0
        }
        //confere se o usuario realmente quer fazer isso
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }
        if (escolha == 's'){
            //pega as informacoes e as guarda em variaveis
            let status = 'realizada'
            console.log('qual seria a data de checkin')
            console.log('FORMATO: MM/DD/AAAA')
            let checkin = verificar_data()
            console.log('qual seria a data de chekout')
            console.log('FORMATO: MM/DD/AAAA')
            let checkout = verificar_data()
            console.log(this.listaquartos)
            console.log('Escolha um quarto (Digite o ID do quarto)')
            let quarto = verificar_numero()
            //fara um laco de repeticao para ver se o quarto que o cliente quer esta disponivel
            let pos = 0
            let list = this.listaquartos
        
            while(pos < parseFloat(list.length)){

                if (parseFloat(quarto) == list[pos].id_quarto){
                    if(list[pos].quantidade<=0){
                        console.log('\n\nESSE QUARTO NAO ESTA DISPONIVEL\n\n')
                        break
                    }

                    else{
                        let reserva_cadastrada = new reserva(this.idr,id,status,checkin,checkout,quarto)
                        //cria um novo id para a proxima reserva
                        this.idr=this.idr+1
                        //cadastra a reserva na lista
                        this.listareservas.push(reserva_cadastrada)
                        console.log('\n \n-----RESERVA CADASTRADA COM SUCESSO-----\n \n')
                        this.listaquartos[pos].quantidade -= 1
                    }
                }
                pos=pos+1
            }
            
        }
    }


    verreservas_cliente(id){
        //permite o cliente ver as suas reservas
        //verifica se ha alguma reserva
        if (parseFloat(this.listareservas.length)==0){
            console.log('VOCE NAO TEM RESERVAS')
            return 0
        }
        let pos = 0
        let reservas = 0
        //percorre a lista de reservas e busca quais tem o mesmo id do cliente
        while (pos < parseFloat(this.listareservas.length)){
            if (this.listareservas[pos].id_cliente == id){
                console.log(this.listareservas[pos])
                //adiciona mais um nas reservas do cliente
                reservas = reservas + 1
                
            }   
            pos=pos+1
        }
        if (reservas == 0){
            console.log('VOCE NAO TEM RESERVAS')
            return 0
        }
        return reservas
        
    }

    cancelarreserva(id){
        //confere se o usuario realmente quer fazer isso
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }

        if (escolha == 's'){
            //imprime as reservas do cliente
            let reserva = this.verreservas_cliente(id)
            if (this.listareservas.length != 0){
                console.log('Qual reserva voce deseja cancelar? (DIGITE O ID)')
                let escolha = verificar_numero()
                let pos = 0
                while (pos < this.listareservas.length){
                    if (reserva == 0){
                        pos = pos + 1
                        continue
                    }
                    if (this.listareservas[pos].id_cliente==id){
                        
                        if(this.listareservas[pos].id_reserva == escolha){
                            this.listareservas[pos].status = 'cancelada'
                            console.log('RESERVA CANCELADA COM SUCESSO')
                        }
                    }
                    pos = pos + 1
                }
                  
            }
            
        }

    }

    mudarstatus(){
        //confere se o usuario realmente quer fazer isso
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }

        if (escolha == 's'){
            //imprime as reservas existentes
            console.log(this.verreservas())
            //pergunta qual reserva ele deseja alterar
            console.log('Qual reserva desejas alterar? (DIGITE O ID DA RESERVA)')
            let escolha = verificar_numero()
            let pos = 0
            while(pos < this.listareservas.length){
                //varre todas as reservas em busca da reserva escolhida
                if (this.listareservas[pos].id_reserva==escolha){
                    //pergunta o novo status
                    console.log('Qual deve ser o novo status?')
                    console.log('OPCOES: pendente, adiada, realizada, cancelada')
                    let listaopcoes = ['pendente','adiada','realizada','cancelada']
                    let opcao = requisicao.question()
                    //de fato a muda
                    if(listaopcoes.includes(opcao)){
                        this.listareservas[pos].status = opcao
                        console.log('MUDANCA REALIZADA COM SUCESSO')
                        break
                    }
                    else{
                        continue
                    }
                }
                pos=pos+1
            }

        }

    }

    vizualizaravaliacoes(){
        console.log(this.listaavaliacoes)
    }

    realizaravaliacoes(id){
        //confere se o usuario realmente quer fazer isso
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }

        if (escolha == 's'){
        //imprime as reservas do cliente para ele avaliar
        if (this.verreservas_cliente(id)==0){
            return 0
        }
        
        console.log('Qual e o nome do quarto?')
        let nome_quarto = verificar_nome()
        let avalia = this.listaclientes[id].nome
        console.log('Quantas estrelas voce da para o quarto? (de 0 a 5)')
        let listaestrelas = [0,1,2,3,4,5]
        let stars = parseFloat(requisicao.question())
        while(!(listaestrelas.includes(stars))){
            console.log('DIGITE UM VALOR VALIDO PARA AS ESTRELAS')
            console.log('DE 0 A 5')
            stars = parseFloat(requisicao.question())
        }

        console.log('De uma pequena descricao da avaliacao, caso queira')
        let desc = requisicao.question()
    
        //compila as informacoes no objeto avaliacoes
        let avaliacao = new avaliacoes(stars,nome_quarto,desc,avalia)
        this.listaavaliacoes.push(avaliacao)
    }

    }

    editardados_cliente(id){
        //confere se o usuario realmente quer fazer isso
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }

        if (escolha == 's'){
            //cria uma lista de opcoes para o usuario poder trocar
            let opcoes = ['nome','cpf','senha','email','nascimento']
            console.log('Qual dado desejas editar?')
            console.log('nome,cpf,senha,email ou nascimento?')
            let escolhacerta = true
            
            while (escolhacerta){
                let escolha = requisicao.question()
                if(opcoes.includes(escolha)){

                    if(escolha=='nome'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_nome()
                        this.listaclientes[id].nome = novo

                    }
                    if(escolha=='cpf'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_cpf()
                        this.listaclientes[id].cpf = novo
                        
                    }
                    if(escolha=='senha'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_senha()
                        this.listaclientes[id].senha = novo
                        
                    }
                    if(escolha=='email'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_email()
                        this.listaclientes[id].email = novo
                    }
                    if(escolha=='nascimento'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_data()
                        this.listaclientes[id].data_nascimento = novo
                        
                    }

                    console.log(escolha + ' alterado(a) com sucesso!!')

                    break
                
                }
                else{
                    //caso o usuario decida nao digitar uma opcao valida
                    console.log('DIGITE UMA OPCAO VALIDA')
                }
            }
        }
    }

    editardados_funcionarios(id){
        //confere se o usuario realmente quer fazer isso
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }

        if (escolha == 's'){
            //cria uma lista de opcoes para o usuario poder trocar
            let opcoes = ['nome','cpf','senha','email']
            console.log('Qual dado desejas editar?')
            console.log('nome,cpf,senha,email')
            let escolhacerta = true
            
            while (escolhacerta){
                let escolha = requisicao.question()
                if(opcoes.includes(escolha)){

                    if(escolha=='nome'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_nome()
                        this.listafuncionarios[id].nome = novo

                    }
                    if(escolha=='cpf'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_cpf()
                        this.listafuncionarios[id].cpf = novo
                        
                    }
                    if(escolha=='senha'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_senha()
                        this.listafuncionarios[id].senha = novo
                        
                    }
                    if(escolha=='email'){
                        //pega o novo valor e o atribui no cliente novo
                        console.log('qual deve ser o novo(a) '+escolha)
                        let novo = verificar_email()
                        this.listafuncionarios[id].email = novo
                    }
    
                    //confirma a troca
                    console.log(escolha + ' alterado(a) com sucesso!!')

                    break
                
                }
                else{
                    //caso o usuario decida nao digitar uma opcao valida
                    console.log('DIGITE UMA OPCAO VALIDA')
                    console.log('nome,cpf,senha,email ou nascimento?')
                }
            }
        }
    }

    excluir_quarto(){
         //confere se o usuario realmente quer fazer isso
         console.log('Tem certeza que deseja fazer isso?')
         console.log('DIGITE: s/n')
         let listaopcoes = ['s','n']
         let escolhacerta = true
         //confere se a escolha esta contina no s ou n
         while (escolhacerta){
             var escolha = requisicao.question()
             //se estiver sai do laco de repeticao
             if (listaopcoes.includes(escolha)){
                 escolhacerta=false
             }
             else{
                 console.log('escolha uma opcao valida\n')
                 console.log('DIGITE: s/n')
             }
         }
         
         if (escolha == 's'){
            //se nao tiver quartos cadastrados ele nao apaga nada
            if(parseFloat(this.listaquartos.length) == 0){
                console.log('NAO HA QUARTOS PARA SEREM EXCLUIDOS')
                return 0
            }
            console.log(this.listaquartos)
            let pos = 0
            //pergunta qual quarto deve ser excluido
            console.log('Digite o ID do quarto que desejas excluir')
            let idquarto = verificar_numero()
            let listaexcluida=[]
            for (let i = 0; i < this.listaquartos.length; i++) {
                if (this.listaquartos[i].id_quarto != idquarto) {
                    listaexcluida.push(this.listaquartos[i]);    
                }
            }
            this.listaquartos=listaexcluida
            console.log('\n\nQUARTO EXCLUIDO COM SUCESSO\n\n')
         }
    }

    modificar_quarto(){
        //confere se o usuario realmente quer fazer isso
        console.log('Tem certeza que deseja fazer isso?')
        console.log('DIGITE: s/n')
        let listaopcoes = ['s','n']
        let escolhacerta = true
        //confere se a escolha esta contina no s ou n
        while (escolhacerta){
            var escolha = requisicao.question()
            //se estiver sai do laco de repeticao
            if (listaopcoes.includes(escolha)){
                escolhacerta=false
            }
            else{
                console.log('escolha uma opcao valida\n')
                console.log('DIGITE: s/n')
            }
        }
        
        if (escolha == 's'){
           //se nao tiver quartos cadastrados ele nao entra no laco
           if(parseFloat(this.listaquartos.length) == 0){
               console.log('NAO HA QUARTOS PARA SEREM MODIFICADOS')
               return 0
           }
           console.log(this.listaquartos)
           let pos = 0
           //pergunta qual quarto deve ser modificado
           console.log('Digite o ID do quarto que desejas modifcar')
           let escolha = verificar_numero()
           while(pos<this.listaquartos.length){

               if (escolha==this.listaquartos[pos].id_quarto){
                    //de fato apaga o quarto caso o id escolhido seja igual ao id do quarto
                   
                    let lista = ['ncamas','preco','quantidade','nome','descricao']
                    
                    while(true){
                        //pergunta o que deve ser modificado
                        console.log('O que voce desejas modificar?')
                        console.log('ncamas,preco,quantidade,nome,descricao')
                        escolha = requisicao.question()
                        //ate que seja o input aquilo que esta na lista, ele vai ficar no laco de repeticao
                        if(lista.includes(escolha)){
                            //vai observar qual foi a escolha do usuario e perguntar qual deve ser o novo  
                            if(escolha=='ncamas'){
                                console.log('Qual deve ser o novo(a) '+ escolha)
                                let novo = verificar_numero()
                                this.listaquartos[pos].ncamas = novo
                            }

                            if(escolha=='preco'){
                                console.log('Qual deve ser o novo(a) '+ escolha)
                                let novo = verificar_numero()
                                this.listaquartos[pos].preco = novo
                            }

                            if(escolha=='quantidade'){
                                console.log('Qual deve ser o novo(a) '+ escolha)
                                let novo = verificar_numero()
                                this.listaquartos[pos].quantidade = parseFloat(novo)
                            }

                            if(escolha=='nome'){
                                console.log('Qual deve ser o novo(a) '+ escolha)
                                let novo = requisicao.question()
                                this.listaquartos[pos].nome = novo
                            }

                            if(escolha=='descricao'){
                                console.log('Qual deve ser o novo(a) '+ escolha)
                                let novo = requisicao.question()
                                this.listaquartos[pos].descricao = novo
                            }


                            console.log('\n\nQUARTO MODIFICADO COM SUCESSO\n\n')
                            break
                        }
                        console.log('DIGITE UMA OPCAO VALIDA')
                    }  
               }
               pos=pos+1
           }
        }
   }
}


function main(){
    console.log('BEM VINDO AO SISTEMA DO HOTEL F-LUXO!\n')
    let escolha = 1
    //cria o sistema, com as suas listas e IDs zerados
    let system = new sistema([],[],[],[],[],[],0,0,0,0)

        while (escolha != 5){
        //imprime as opcoes do client
        system.paginaprincipal()
        let listaopcoes = ['1','2','3','4','5']
        //pergunta o que ele deseja fazer
        escolha = requisicao.question()

        if (!(escolha in listaopcoes)){
            if (escolha != 5){
            console.log('\n DIGITE UM VALOR VALIDO \n')
            continue}
            
        }
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
                while(escolha != 9){
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
                        system.fazerreserva(resposta)
                        
                    }

                    if (escolha == 4){
                        system.cancelarreserva(resposta)
                    }

                    if (escolha == 5){
                        system.verreservas_cliente(resposta)

                    }

                    if (escolha == 6){
                        system.vizualizaravaliacoes()
                    }

                    if (escolha == 7){
                        system.realizaravaliacoes(resposta)
                    }

                    if (escolha == 8){
                        system.editardados_cliente(resposta)
                    }
                    
                    //caso o cliente desejese sair
                    if (escolha==9){
                        break
                    }

                }
            }
        }

        //login funcionario
        if (escolha == 4){
            //pega o return do login
            let resposta = system.loginfuncionario()

            //ve se deu falso, se for diferente de falso ele loga
            if(resposta !== false){
                let escolha = 0
                while(escolha != 10){
                    system.paginafuncionario()
                    escolha=requisicao.question()

                    if (escolha == 1){
                        //com o id na resposta, imprime os dados apenas do funcionario com aquele id
                        system.funcionariodados(resposta)
                        }

                    if (escolha == 2){
                        //verifica antes se tem quartos
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
                        //muda o status de alguma reserva
                        system.mudarstatus()
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
                        //executa o metodo de adicionar quarto
                        system.adicionarquarto()
                    }

                    if (escolha == 7){
                        system.editardados_funcionarios(resposta)
                    }

                    if (escolha == 8){
                        system.excluir_quarto()
                    }
                    
                    if (escolha == 9){
                        system.modificar_quarto()
                    }
                    

                    if (escolha==10){
                        //sai do laco, saindo do login do funcionario
                        break
                    }
                }
            }
        }
    }
}

main()