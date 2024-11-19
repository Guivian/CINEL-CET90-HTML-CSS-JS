function apagar_msg(stringvar)
{
    let text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function mostrar_mes()
{
    let data = document.getElementById("data-mes").value;

    if (data[5] == "0" && data[6] == "1")
        document.getElementById("mes").innerHTML = "Janeiro";
    else if (data[5] == "0" && data[6] == "2")
        document.getElementById("mes").innerHTML = "Fevereiro";
    else if (data[5] == "0" && data[6] == "3")
        document.getElementById("mes").innerHTML = "Março";
    else if (data[5] == "0" && data[6] == "4")
        document.getElementById("mes").innerHTML = "Abril";
    else if (data[5] == "0" && data[6] == "5")
        document.getElementById("mes").innerHTML = "Maio";
    else if (data[5] == "0" && data[6] == "6")
        document.getElementById("mes").innerHTML = "Junho";
    else if (data[5] == "0" && data[6] == "7")
        document.getElementById("mes").innerHTML = "Julho";
    else if (data[5] == "0" && data[6] == "8")
        document.getElementById("mes").innerHTML = "Agosto";
    else if (data[5] == "0" && data[6] == "9")
        document.getElementById("mes").innerHTML = "Setembro";
    else if (data[5] == "1" && data[6] == "0")
        document.getElementById("mes").innerHTML = "Outubro";
    else if (data[5] == "1" && data[6] == "1")
        document.getElementById("mes").innerHTML = "Novembro";
    else if (data[5] == "1" && data[6] == "2")
        document.getElementById("mes").innerHTML = "Dezembro";
}

function calcular_ponto()
{
    let temp = document.getElementById("hora-entrada").value;

    let hora_entrada = temp[0] +  temp[1];
    let minuto_entrada = temp[3] + temp[4];

    temp = document.getElementById("hora-saida").value;

    let hora_saida = temp[0] +  temp[1];
    let minuto_saida = temp[3] + temp[4];

    if (hora_entrada > hora_saida)
        document.getElementById("ponto").innerHTML = "Erro! A data de saída é inferior à data de entrada."
    else if (hora_entrada == hora_saida)
    {
        if (minuto_entrada > minuto_saida)
            document.getElementById("ponto").innerHTML = "Erro! A data de saída é inferior à data de entrada."
    }
}

function calcular_semana()
{
    let dia = document.getElementById("data-semana").value;

    document.getElementById("dia-semana").innerHTML = dia.getDay();
    //if (dia.getDay() == 0)
    //    document.getElementById("dia-semana").innerHTML = "Segunda-Feira";
}