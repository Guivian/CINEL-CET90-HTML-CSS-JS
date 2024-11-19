function apagar_msg(stringvar)
{
    let text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function pos_neg()
{
    let num = document.getElementById("num").value;

    if (num == "")
        document.getElementById("number").innerHTML = "Por favor, insira um número";
    else
    {
        num = parseInt(num);
        if (num >= 0) 
            document.getElementById("number").innerHTML = "O número " + num + " é positivo";
        else
        document.getElementById("number").innerHTML = "O número " + num + " é negativo";
    }
}

function maior_num()
{
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    if (n1 == "" || n2 == "")
        document.getElementById("maior").innerHTML = "Por favor, insira dois números";
    else
    {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        if (n1 > n2)
            document.getElementById("maior").innerHTML = "O número " + n1 + " é maior que o número " + n2;
        else if (n2 > n1)
            document.getElementById("maior").innerHTML = "O número " + n2 + " é maior que o número " + n1;
        else
            document.getElementById("maior").innerHTML = "Os dois números são iguais";
    }
}

let random = 0;
let tentativas = 0;
function validar_palpite()
{
    let palpite = parseInt(document.getElementById("palpite").value);

    if (random != 0)
    {
        if ((palpite >= 1 && palpite <= 6) && !isNaN(palpite))
        {
            tentativas++;
            if (palpite == random)
            {
                document.getElementById("texto_palpite").innerHTML = "Parabéns! Acertou com " + tentativas + " tentativa(s)";
                tentativas = 0;
                random = 0;
            }
            else
                document.getElementById("texto_palpite").innerHTML = "Errou!\nTentativa número: " + tentativas;
        }
        else
            document.getElementById("texto_palpite").innerHTML = "Por favor, insira um número válido (entre 1 e 6)";
    }
    else
    document.getElementById("texto_palpite").innerHTML = "Por favor gerar um número aleatório";
}

function gerar_random()
{
    random = Math.floor((Math.random() * 6) + 1);
    if (random != 0)
    {
        document.getElementById("texto_palpite").innerHTML = "Número aleatório gerado com sucesso!";
        tentativas = 0;
    }
}

function ordem_crescente()
{
    let n1 = document.getElementById("crescente1").value;
    let n2 = document.getElementById("crescente2").value;
    let n3 = document.getElementById("crescente3").value;

    if (n1 == "" || n2 == "" || n3 == "")
        document.getElementById("crescente").innerHTML = "Por favor, insira três números";
    else
    {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        n3 = parseInt(n3);

        if (n1 < n2 && n1 < n3)
        {
            if (n2 < n3)
                document.getElementById("crescente").innerHTML = n1 + " - " + n2 + " - " + n3;
            else
                document.getElementById("crescente").innerHTML = n1 + " - " + n3 + " - " + n2;
        }
        else if (n2 < n1 && n2 < n3)
        {
            if (n1 < n3)
                document.getElementById("crescente").innerHTML = n2 + " - " + n1 + " - " + n3;
            else
                document.getElementById("crescente").innerHTML = n2 + " - " + n3 + " - " + n1;
        }
        else if (n3 < n1 && n3 < n2)
        {
            if (n1 < n2)
                document.getElementById("crescente").innerHTML = n3 + " - " + n1 + " - " + n2;
            else
                document.getElementById("crescente").innerHTML = n3 + " - " + n2 + " - " + n1;
        }
        else if (n1 == n2 && n1 < n3)
            document.getElementById("crescente").innerHTML = n1 + " - " + n2 + " - " + n3;
        else if (n1 == n3 && n1 < n2)
            document.getElementById("crescente").innerHTML = n1 + " - " + n3 + " - " + n2;
        else if (n2 == n3 && n2 < n1)
            document.getElementById("crescente").innerHTML = n2 + " - " + n3 + " - " + n1;
        else if (n1 == n2 && n1 == n3)
            document.getElementById("crescente").innerHTML = n1 + " - " + n2 + " - " + n3;
    }
}

function perto_100()
{
    let n1 = document.getElementById("perto1").value - 100;
    let n2 = document.getElementById("perto2").value - 100;
    let n3 = document.getElementById("perto3").value - 100;

    if (n1 < 0)
        n1 = n1 * (-1);
    if (n2 < 0)
        n2 = n2 * (-1);
    if (n3 < 0)
        n3 = n3 * (-1);

    if (n1 < n2 && n1 < n3)
        document.getElementById("perto").innerHTML = "O número mais próximo de 100 é " + document.getElementById("perto1").value
    else if (n2 < n1 && n2 < n3)
        document.getElementById("perto").innerHTML = "O número mais próximo de 100 é " + document.getElementById("perto2").value
    else if (n3 < n1 && n3 < n2)
        document.getElementById("perto").innerHTML = "O número mais próximo de 100 é " + document.getElementById("perto3").value
    else if (n1 == n2 && n1 < n3)
        document.getElementById("perto").innerHTML = "O número mais próximo de 100 é " + document.getElementById("perto1").value
    else if (n2 == n3 && n2 < n1)
        document.getElementById("perto").innerHTML = "O número mais próximo de 100 é " + document.getElementById("perto2").value
    else if (n3 == n1 && n3 < n2)
        document.getElementById("perto").innerHTML = "O número mais próximo de 100 é " + document.getElementById("perto3").value
    else if (n1 == n2 && n1 == n3)
        document.getElementById("perto").innerHTML = "Os números são todos iguals, logo, o número mais próximo de 100 é " + document.getElementById("perto1").value
}

function calcular_nota_qualitativa()
{
    let nota = document.getElementById("nota").value;

    if (nota >= 0 && nota < 5)
        document.getElementById("nota_qualitativa").innerHTML = "Muito insuficiente";
    else if (nota >= 5 && nota < 9.5)
        document.getElementById("nota_qualitativa").innerHTML = "Insuficiente";
    else if (nota >= 9,5 && nota < 14)
        document.getElementById("nota_qualitativa").innerHTML = "Suficiente";
    else if (nota >= 14 && nota < 16)
        document.getElementById("nota_qualitativa").innerHTML = "Bom";
    else if (nota >= 16 && nota <= 20)
        document.getElementById("nota_qualitativa").innerHTML = "Muito Bom";
}

function validar_frase()
{
    let split_string = document.getElementById("frase_nao").value;
    let frase_final = "";
    let i = -1;

    if (split_string != "")
    {
        split_string = split_string.split(" ");

        while (++i != split_string.length)
            if (split_string[i] != "não")
                frase_final = frase_final + " " + split_string[i];

        document.getElementById("text_nao").innerHTML = frase_final;
    }
    else
        document.getElementById("text_nao").innerHTML = "Por favor, escreva uma frase";
}

function count_string_num()
{
    let frase = document.getElementById("nfrase").value;
    let count_n = 0;
    let i = 0;

    while (i != frase.length)
    {
        if (frase.charAt(i) >= '0' && frase.charAt(i) <= '9')
            count_n++;
        i++;
    }

    if (count_n == 0)
        document.getElementById("frase_num").innerHTML = "A frase não tem nenhum caractére numérico"
    else
        document.getElementById("frase_num").innerHTML = "A frase inserida tem " + count_n + " caractére(s) numérico(s)";
}

function inverter_frase()
{
    let frase = document.getElementById("original_text").value;
    let frase_invertida = "";
    let i = 0;

    while (i != frase.length)
        i++;

    while (i != -1)
    {
        frase_invertida = frase_invertida + frase.charAt(i);
        i--;
    }

    document.getElementById("text_invertido").innerHTML = frase_invertida;
}