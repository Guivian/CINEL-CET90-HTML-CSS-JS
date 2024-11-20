function apagar_msg(stringvar)
{
    const text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function mostrar_mes()
{
    const temp = document.getElementById("data-mes").value;
    const data = new Date(temp);

    if (data.getMonth() == 0)
        document.getElementById("mes").innerHTML = "Janeiro";
    else if (data.getMonth() == 1)
        document.getElementById("mes").innerHTML = "Fevereiro";
    else if (data.getMonth() == 2)
        document.getElementById("mes").innerHTML = "Março";
    else if (data.getMonth() == 3)
        document.getElementById("mes").innerHTML = "Abril";
    else if (data.getMonth() == 4)
        document.getElementById("mes").innerHTML = "Maio";
    else if (data.getMonth() == 5)
        document.getElementById("mes").innerHTML = "Junho";
    else if (data.getMonth() == 6)
        document.getElementById("mes").innerHTML = "Julho";
    else if (data.getMonth() == 7)
        document.getElementById("mes").innerHTML = "Agosto";
    else if (data.getMonth() == 8)
        document.getElementById("mes").innerHTML = "Setembro";
    else if (data.getMonth() == 9)
        document.getElementById("mes").innerHTML = "Outubro";
    else if (data.getMonth() == 10)
        document.getElementById("mes").innerHTML = "Novembro";
    else if (data.getMonth() == 11)
        document.getElementById("mes").innerHTML = "Dezembro";
}

function calcular_ponto()
{
    const entrada = document.getElementById("hora-entrada").value;
    const saida = document.getElementById("hora-saida").value;
    const dtAtual = new Date();
    const hrEntrada = new Date(dtAtual.getFullYear(), dtAtual.getMonth(), dtAtual.getDay(), entrada[0]+entrada[1], entrada[3]+entrada[4]);
    const hrSaida = new Date(dtAtual.getFullYear(), dtAtual.getMonth(), dtAtual.getDay(), saida[0]+saida[1], saida[3]+saida[4]);

    if (hrEntrada >= hrSaida)
        document.getElementById("ponto").innerHTML = "Erro! A hora de entrada deve ser inferior à de saída"
}

function calcular_semana()
{
    const temp = document.getElementById("data-semana").value;
    const data = new Date(temp);


    if (data.getDay() == 0)
        document.getElementById("dia-semana").innerHTML = "Domingo";
    else if (data.getDay() == 1)
        document.getElementById("dia-semana").innerHTML = "Segunda-Feira";
    else if (data.getDay() == 2)
        document.getElementById("dia-semana").innerHTML = "Terça-Feira";
    else if (data.getDay() == 3)
        document.getElementById("dia-semana").innerHTML = "Quarta-Feira";
    else if (data.getDay() == 4)
        document.getElementById("dia-semana").innerHTML = "Quinta-Feira";
    else if (data.getDay() == 5)
        document.getElementById("dia-semana").innerHTML = "Sexta-Feira";
    else if (data.getDay() == 6)
        document.getElementById("dia-semana").innerHTML = "Sábado";
}

function calcular_idade()
{
    const temp = document.getElementById("data-nasc").value;
    const dtNasc = new Date(temp);
    const dtAtual = new Date();

    if (dtAtual <= dtNasc)
        document.getElementById("idade").innerHTML = "Erro! A data de nascimento inserida não é válida";
    else
    {
        if (dtAtual.getMonth() >= dtNasc.getMonth())
            document.getElementById("idade").innerHTML = `Idade: ${dtAtual.getFullYear() - dtNasc.getFullYear()}`;
        else
            document.getElementById("idade").innerHTML = `Idade: ${dtAtual.getFullYear() - dtNasc.getFullYear() - 1}`;
    }
}

function resultado_valores()
{
    const v = document.getElementById("valor").value;
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;
    let v3 = document.getElementById("valor3").value;
    let valido = true;

    if (v == "" || v1 == "" || v2 == "" || v3 == "")
    {
        document.getElementById("resultado-valores").innerHTML = "Erro! Por favor preencha devidamente as zonas reservadas para os três palpites e para o valor do produto."
        valido = false; 
    }

    if (v1 == v2 || v1 == v3 || v2 == v3)
    {
        document.getElementById("resultado-valores").innerHTML = "Erro! Não podem haver valores repetidos."
        valido = false;
    }

    if (v1 < 1 || v2 < 1 || v3 < 1)
    {
        document.getElementById("resultado-valores").innerHTML = "Erro! Não podem haver valores negativos."
        valido = false
    }


    if (valido == true)
    {
        v1 = v - v1;
        v2 = v - v2;
        v3 = v - v3;

        if (v1 <= -1)
            v1 = v + 1;

        if (v2 <= -1)
            v2 = v + 1;

        if (v3 <= -1)
            v3 = v + 1;


        if (v1 < v2 && v1 < v3)
            document.getElementById("resultado-valores").innerHTML = `O concorrente 1 ganhou! O valor indicado foi o mais próximo, ficando apenas a ${v1} € de diferença do valor original.`;
        else if (v2 < v3 && v2 < v1)
            document.getElementById("resultado-valores").innerHTML = `O concorrente 2 ganhou! O valor indicado foi o mais próximo, ficando apenas a ${v2} € de diferença do valor original.`;
        else if (v3 < v1 && v3 < v2)
            document.getElementById("resultado-valores").innerHTML = `O concorrente 3 ganhou! O valor indicado foi o mais próximo, ficando apenas a ${v3} € de diferença do valor original.`;
        else
            document.getElementById("resultado-valores").innerHTML = "Ninguém ganhou!"
    }
}

function eleicoes()
{
    const c1 = document.getElementById("candidato1").value;
    const c2 = document.getElementById("candidato2").value;
    const c3 = document.getElementById("candidato3").value;
    let vencedor = 0;
    let valido = true;

    if (c1 == "" || c2 == "" || c3 == "")
    {
        valido = false;
        document.getElementById("resultado-eleicoes").innerHTML = "Erro! Por favor preencha devidamente as zonas reservadas para os votos dos 3 candidatos";
    }

    if (c1 < 0 || c2 < 0 || c3 < 0)
    {
        valido = false;
        document.getElementById("resultado-eleicoes").innerHTML = "Erro! Não podem haver valores negativos";
    }

    if (valido == true)
    {
        if (c1 > c2 && c2 == c3)
            vencedor = 8;
        else if (c2 > c3 && c3 == c1)
            vencedor = 9;
        else if (c3 > c1 && c1 == c2)
            vencedor = 10;
        else if (c1 > c2 && c1 > c3)
            vencedor = 1;
        else if (c2 > c3 && c2 > c1)
            vencedor = 2;
        else if (c3 > c1 && c3 > c2)
            vencedor = 3;
        else if (c1 == c2 && c1 > c3)
            vencedor = 4;
        else if (c1 == c3 && c1 > c2)
            vencedor = 5;
        else if (c2 == c3 && c2 > c1)
            vencedor = 6;
        else if (c1 == c2 && c1 == c3)
            vencedor = 7;
        

        if (vencedor == 1)
            document.getElementById("resultado-eleicoes").innerHTML = `O candidato 1 está na liderança com ${c1} votos.`;
        else if (vencedor == 2)
            document.getElementById("resultado-eleicoes").innerHTML = `O candidato 2 está na liderança com ${c2} votos.`;
        else if (vencedor == 3)
            document.getElementById("resultado-eleicoes").innerHTML = `O candidato 3 está na liderança com ${c3} votos.`;
        else if (vencedor == 4)
            document.getElementById("resultado-eleicoes").innerHTML = `Os candidatos 1 e 2 estão na liderança com ${c1} votos e ${c2} votos respectivamente.`;
        else if (vencedor == 5)
            document.getElementById("resultado-eleicoes").innerHTML = `Os candidatos 1 e 3 estão na liderança com ${c1} votos e ${c3} votos respectivamente.`;
        else if (vencedor == 6)
            document.getElementById("resultado-eleicoes").innerHTML = `Os candidatos 2 e 3 estão na liderança com ${c2} votos e ${c3} votos respectivamente.`;
        else if (vencedor == 7)
            document.getElementById("resultado-eleicoes").innerHTML = `Os candidatos estão todos empatados com ${c1} votos.`;
        else if (vencedor == 8)
            document.getElementById("resultado-eleicoes").innerHTML = `O candidato 1 está na liderança com ${c1} votos. Os candidatos 2 e 3 estão empatados com ${c2} votos.`;
        else if (vencedor == 9)
            document.getElementById("resultado-eleicoes").innerHTML = `O candidato 2 está na liderança com ${c2} votos. Os candidatos 2 e 3 estão empatados com ${c3} votos.`;
        else if (vencedor == 10)
            document.getElementById("resultado-eleicoes").innerHTML = `O candidato 3 está na liderança com ${c3} votos. Os candidatos 2 e 3 estão empatados com ${c1} votos.`;
    }
}