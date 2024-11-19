function alerta()
{
    alert("É preciso fazer todos os exercícios para aprender!");
}

function confirmar()
{
    let text = "Deseja continuar a realizar os exercícios?";
    if (confirm(text) == true)
        alert("Bem escolhido!");
    else
        alert("Já chega de JavaScript");
}

function nome()
{
    let nome = prompt("Escreva o seu nome:");
    if (nome != null && nome != "")
        document.getElementById("nome").innerHTML = "O Formando " + nome + " está aprovado"
    else
        alert("Alguma informaçao inserida não foi válida");
}

function apagar_msg(stringvar)
{
    let text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function nome_idade()
{
    let nome = prompt("Escreva o seu nome:");
    let idade = prompt("Escreva a sua idade:")
    if (nome != null && nome != "" && idade != null && idade != "")
    {
        document.getElementById("nome_idade").innerHTML = "O Formando " + nome + " tem " + idade + " anos";
    }
    else
        alert("Alguma informaçao inserida não foi válida");
}

function console_log()
{
    let nome = prompt("Escreva o seu nome:");
    let clube = prompt("Escreva o seu clube de futebol:")
    if (nome != null && nome != "" && clube != null && clube != "")
        console.log("Eu sou o(a) " + nome + " e sou adepto(a) do " + clube);
    else
        alert("Alguma informaçao inserida não foi válida");
}

function inserir_dados()
{
    let nome = prompt("Escreva o seu nome:");
    let estado_civil = prompt("Indique o seu estado civil:\nCasado; Solteiro; Divorciado; Viúvo");
    let idade = prompt("Escreva a sua idade");
    let altura = prompt("Escreva a sua altura");
    let socio = prompt("É sócio?\nSim/Não");
    let email = prompt("Escreva o seu endereço de e-mail:");
    if (nome != null && nome != "" && estado_civil != null && estado_civil != "" & idade != null && idade != "" & altura != null && altura != "" & socio != null && socio != "" & email != null && email != "")
    {
        document.getElementById("dados").innerHTML = "Nome: " + nome + "<br/>Estado Civil: " + estado_civil + "<br/>Idade: " + idade + "<br/>Altura: " + altura + "<br/>Sócio: " + socio + "<br/>Email: " + email;
    }
    else
        alert("Alguma informaçao inserida não foi válida");      
}

function data()
{
    const data_atual = new Date();
    const data_formatada = data_atual.toLocaleDateString();
    document.getElementById("data").innerHTML = data_formatada;
}

function cumprimentar()
{
    let data = new Date();
    let hora_atual = data.getHours();

    if (hora_atual >= 3 && hora_atual < 12)
        document.getElementById("hora").innerHTML = "Bom dia!";
    else if (hora_atual >= 12 && hora_atual < 20)
        document.getElementById("hora").innerHTML = "Boa tarde!";
    else if (hora_atual >= 20 && hora_atual <= 23 || hora_atual >= 0 && hora_atual < 3)
        document.getElementById("hora").innerHTML = "Boa noite!";
}

function imprimir()
{
    window.print();
}

function mostrar_url()
{
    const url_atual = window.location.href;
    document.getElementById("url").innerHTML = url_atual;
}