function apagar_msg(stringvar)
{
    const text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function calcular_conversao()
{
    const euro = document.getElementById("valor_euros").value;
    const cambio = document.getElementById("valor_cambio").value

    if (euro == "" || cambio == "")
        document.getElementById("text_cambio").innerHTML = "Erro! Por favor introduza um valor para os € e outro valor para a taxa de câmbio";
    else if (euro <= -1 || cambio <= -1)
        document.getElementById("text_cambio").innerHTML = "Erro! Pelo menos um dos valores introduzidos não é válido";
    else
        document.getElementById("text_cambio").innerHTML = euro + "€ = " + (euro*cambio) + "US$";
}

function converter_negativo()
{
    const num = document.getElementById("convert_num_neg").value;

    if (num == "")
        document.getElementById("text_convert_num").innerHTML = "Por favor insira um número para a conversão";
    else if (num < 0)
        document.getElementById("text_convert_num").innerHTML = "O número " + num + " já é um número negativo";
    else if (num > 0)
        document.getElementById("text_convert_num").innerHTML = (num * (-1));
    else if (num == 0)
        document.getElementById("text_convert_num").innerHTML = "O número 0 não tem negativo";
}

function calcular_imposto()
{
    const valor = document.getElementById("valor_total").value;
    let imposto = document.getElementById("percentagem").value;

    if (valor == "" | imposto == "")
        document.getElementById("text_imposto").innerHTML = "Erro! Por favor introduza um valor para os € e a percentagem do imposto";
    else if (valor <= 0 | imposto < 0)
        document.getElementById("text_imposto").innerHTML = "Erro! Pelo menos um dos valores introduzidos não é válido";
    else
    {
        imposto = document.getElementById("percentagem").value / 100;
        document.getElementById("text_imposto").innerHTML = "Valor sem imposto: " + (valor - (valor * imposto)) + "€    |    Valor do imposto: " + (valor * imposto) + "€";
    }
}

function calcular_total()
{
    const valor = document.getElementById("v_total").value;
    let imposto = document.getElementById("percent").value;

    if (valor == "" | imposto == "")
        document.getElementById("text_total").innerHTML = "Erro! Por favor introduza um valor para os € e a percentagem do imposto";
    else if (valor <= 0 | imposto < 0)
        document.getElementById("text_total").innerHTML = "Erro! Pelo menos um dos valores introduzidos não é válido";
    else
    {
        imposto = 1 + (document.getElementById("percent").value / 100);
        document.getElementById("text_total").innerHTML = "Valor com imposto: " + (valor * imposto) + "€";
    }
}

function gerar_password()
{
    const max_chars = document.getElementById("total_chars").value;
    const possible_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    let random = 0;

    if (max_chars == "" | max_chars < 8)
        document.getElementById("password").innerHTML = "Por favor insira um número válido de caractéres que a password deverá ter"
    else
    {
        for (i = 0; i < max_chars; i++)
        {
            random = Math.floor(Math.random() * 62);
            password = password + possible_chars.charAt(random);
        }
        document.getElementById("password").innerHTML = "Password: " + password;
    }
}

function maior_num_100()
{
    let random = [];
    let maior = 0;

    for (i = 0; i < 100; i++)
        random[i] = Math.floor(Math.random() * 1000);

    document.getElementById("array_100_random").innerHTML = "Array: "

    for (i = 0; i < 100; i++)
    {
        document.getElementById("array_100_random").innerHTML = document.getElementById("array_100_random").innerHTML + random[i] + " ";
        if (maior < random[i])
            maior = random[i];
    }

    document.getElementById("maior_num").innerHTML = "Maior número: " + maior;
}

function menor_num_100()
{
    let random = [];
    let menor = 1000;

    for (i = 0; i < 100; i++)
        random[i] = Math.floor(Math.random() * 1000);

    document.getElementById("random_100_array").innerHTML = "Array: "

    for (i = 0; i < 100; i++)
    {
        document.getElementById("random_100_array").innerHTML = document.getElementById("random_100_array").innerHTML + random[i] + " ";
        if (menor > random[i])
            menor = random[i];
    }

    document.getElementById("menor_num").innerHTML = "Menor número: " + menor;
}

function calcular_consumo()
{
    let consumo = 0;
    const kms = document.getElementById("kms").value;
    const l = document.getElementById("l").value;

    consumo = (l / kms) * 100;

    document.getElementById("consumo").innerHTML = "O automóvel tem um consumo de aproximadamente " + consumo + " L/100 Kms";
}

function calcular_diferenca()
{
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    
    if (n1 == "" | n2 == "")
        document.getElementById("dif_n1_n2").innerHTML = "Erro! Por favor introduza um valor para cada um dos números";
    else if (Math.floor(n1) != n1 || Math.floor(n2) != n2)
        document.getElementById("dif_n1_n2").innerHTML = "Erro! Pelo menos um dos números introduzidos não é um número inteiro";
    else
        document.getElementById("dif_n1_n2").innerHTML = "A diferença do maior número pelo menor é " + Math.abs(n1 - n2);
}

function lancar_dado()
{
    let roll = [0, 0, 0, 0, 0, 0];
    let random = 0;

    for (i = 0; i < 35000; i++)
    {
        random = Math.floor(Math.random() * 6) + 1;
        roll[random - 1]++;
    }

    document.getElementById("dados_lancados").innerHTML = "Resultados dos dados lançados: 1 - " + roll[0] + "; 2 - " + roll[1] + "; 3 - " + roll[2] + "; 4 - " + roll[3] + "; 5 - " + roll[4] + "; 6 - " + roll[5];
}