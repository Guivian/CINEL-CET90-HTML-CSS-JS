function apagar_msg(stringvar)
{
    const text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function remover_chars()
{
    const frase = document.getElementById("frase").value;

    if (frase)
    {
        const permChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
        let newFrase = "";

        for (let char of frase)
            if (permChars.includes(char))
                newFrase += char;

        document.getElementById("newFrase").innerHTML = newFrase;
    }
    else
        document.getElementById("newFrase").innerHTML = "Erro! Escreva uma palavra ou frase.";
}

function converter_num()
{
    let numDec = document.getElementById("numDec").value;

    if (numDec)
    {
        if (numDec > 0)
        {
            let numBin = new Array();
            let numTemp = numDec;
            let i = 0;

            while (Math.floor(numTemp / 2) > 1)
            {
                numBin[i] = Math.floor(numTemp % 2);
                numTemp = Math.floor(numTemp / 2);
                i++;
            }
            numBin[i] = Math.floor(numTemp % 2);
            numBin[i + 1] = Math.floor(numTemp / 2);

            document.getElementById("numBin").innerHTML = `O número ${numDec} convertido para binário é `
            for (let temp = numBin.length - 1; temp >= 0; temp--)
                document.getElementById("numBin").innerHTML += numBin[temp];
        }
        else
            document.getElementById("numBin").innerHTML = "Erro! Este programa ainda não converte números negativos."
    }
    else
        document.getElementById("numBin").innerHTML = "Erro! Insira um número."
}

function mudar_cor_fundo()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const cor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = cor;
}

function mudar_cor_p()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const cor = `rgb(${r}, ${g}, ${b})`;

    document.getElementById("corP54").style.backgroundColor = cor;
}

function criar_tab()
{
    
}