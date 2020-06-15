function Cadastrar(idBtn, nomePessoa, dataCadastro, idStatus) {
    var btn = document.getElementById(idBtn)
if (btn.value == "Cadastrar") {
    var nome = window.prompt('Qual é o Seu Nome?')
    var CadastradoNome = document.getElementById(nomePessoa)
    var DataSolicitacao = document.getElementById(dataCadastro)
    var status = document.getElementById(idStatus)

    var Horario = new Date()
    var DataMes = Horario.getDate()
    var Mes = Horario.getMonth() + 1
    var Ano = Horario.getFullYear();

    status.classList.add('ValorNegativo')
    status.classList.remove('ValorPositivo')
    btn.value = "Cadastrado"

    CadastradoNome.innerHTML = nome
    DataSolicitacao.innerHTML = DataMes + '/' + Mes + '/' + Ano

    let Rifas = {
        idNomePessoa: nomePessoa,
        idData: dataCadastro,
        idStatusMudanca: idStatus,
        idBtn: idBtn,                     
        Nome: nome,
        Data: DataMes + '/' + Mes + '/' + Ano
    }

    var vetorRifas = localStorage.getItem("vetorArmazenado")

    if (vetorRifas) {
        vetorRifas = JSON.parse(vetorRifas)
    } else {
        vetorRifas = []
    }
    vetorRifas.push(Rifas)

    vetorRifas = JSON.stringify(vetorRifas)

    localStorage.setItem("vetorArmazenado", vetorRifas)

}
}

var rifasArmazenadas = JSON.parse(localStorage.getItem("vetorArmazenado"))

for (let i = 0; i < rifasArmazenadas.length; i++) {
if (rifasArmazenadas[i]) {
    var idNomeArmazenado = rifasArmazenadas[i].idNomePessoa;
    var idDataArmazenado = rifasArmazenadas[i].idData;
    var idStatusArmazenado = rifasArmazenadas[i].idStatusMudanca;
    var IdBtnArmazenado = rifasArmazenadas[i].idBtn;
    var nomeMudanca = document.getElementById(idNomeArmazenado)
    var dataMudanca = document.getElementById(idDataArmazenado)
    var statusMudanca = document.getElementById(idStatusArmazenado)
    var btn = document.getElementById(IdBtnArmazenado)                   

    if (nomeMudanca) {
        var nomeArmazenado = rifasArmazenadas[i].Nome
        var statusArmazenado = rifasArmazenadas[i].Status
        var dataArmazenado = rifasArmazenadas[i].Data
        nomeMudanca.innerHTML = nomeArmazenado
        dataMudanca.innerHTML = dataArmazenado
        
        statusMudanca.classList.add('ValorNegativo')
        statusMudanca.classList.remove('ValorPositivo')
        btn.value = "Cadastrado"
    }

    console.log(nomeMudanca)
}
}