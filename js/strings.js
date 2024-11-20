function apagar_msg(stringvar)
{
    const text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function apagar_msg34()
{
    const text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
    {
        document.getElementById("todo-nome").innerHTML = null;
        document.getElementById("primeira-letra").innerHTML = null;
        document.getElementById("ultima-letra").innerHTML = null;
        document.getElementById("primeira-terceira").innerHTML = null;
        document.getElementById("menos-primeira").innerHTML = null;
        document.getElementById("duas-ultimas").innerHTML = null;
        document.getElementById("nome-split").innerHTML = null;
    }
}

function converter_mail()
{
    const str = document.getElementById("mail").value;
    let modStr = "";
    const n = (str.length/2)/2

    for (i = 0; i < str.length; i++)
    {
        if (i >= n && i <= (str.length - n))
            modStr += "*";
        else
            modStr += str[i];
    }

    document.getElementById("e-mail").innerHTML = modStr;
}

function manipular_nome()
{
    const nome = document.getElementById("insert_name").value;
    let pat = "";
    let tlu = "";
    let dul = "";
    const nomeSplit = nome.split(" ");
    let nomeSplitPrint = "";

    for (i = 0; i < nome.length; i++)
    {
        if (nome[i] != ' ')
        {
            if (i < 3)
                pat += nome[i];
            if (i > 0)
                tlu += nome[i];
            if (i >= nome.length - 2)
                dul += nome[i];
        }
    }

    for (i = 0; i < nomeSplit.length; i++)
    {
        nomeSplitPrint += nomeSplit[i];
        if (i < nomeSplit.length - 1)
            nomeSplitPrint += ' | ';
    }

    document.getElementById("todo-nome").innerHTML = nome;
    document.getElementById("primeira-letra").innerHTML = nome[0];
    document.getElementById("ultima-letra").innerHTML = nome[nome.length-1];
    document.getElementById("primeira-terceira").innerHTML = pat;
    document.getElementById("menos-primeira").innerHTML = tlu;
    document.getElementById("duas-ultimas").innerHTML = dul;
    document.getElementById("nome-split").innerHTML = nomeSplitPrint;
}

function gerar_padrao()
{
    const max = document.getElementById("n_linhas").value;
    let padrao = "";

    for (i = 1; i <= max; i++)
    {
        for (j = 1; j <= i; j++)
            padrao += "* ";
        padrao += "<br/>";
    }

    document.getElementById("pad").innerHTML = padrao;
}

function somar_string()
{
    const n = document.getElementById("num").value;
    let soma = 1;

    for (i = 2; i <= n; i++)
        soma += i;
    
    document.getElementById("soma_n").innerHTML = "A soma é igual à " + soma;
}

function gerar_mult()
{
    for (i = 1; i < 101; i++)
        if (i % 3 == 0)
            document.getElementById("mult-tres").innerHTML += i + " ";
}