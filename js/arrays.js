function apagar_msg(stringvar)
{
    const text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function contar_nums()
{
    let ar100 = new Array(100).fill(0);
    let random100 = new Array(100);

    document.getElementById("array100").innerHTML = "";

    for (i = 0; i < 100; i++)
    {
        random100[i] = Math.floor(Math.random() * 100) + 1;
        ar100[random100[i] - 1]++;
    }

    for (i = 0; i < 100; i++)
        if (ar100[i] > 0)
            document.getElementById("array100").innerHTML += `${i + 1}=${ar100[i]} `;
}

function rem_dup()
{
    let ar100 = new Array(100).fill(0);
    let random = new Array(100);

    document.getElementById("arrayDup").innerHTML = "";
    document.getElementById("semDup").innerHTML = ""

    for (i = 0; i < 100; i++)
    {
        random[i] = Math.floor(Math.random() * 100) + 1;
        ar100[random[i] - 1]++;
    }

    document.getElementById("arrayDup").innerHTML = "Array: <br/>";
    for (i = 0; i < 100; i ++)
        document.getElementById("arrayDup").innerHTML += `${random[i]} `;

    for (i = 99; i >= 0; i--)
    {
        if (ar100[random[i] - 1] > 1)
        {
            ar100[random[i] - 1]--;
            random.splice(i, 1);
        }
    }

    document.getElementById("semDup").innerHTML = "Array sem números duplicados: <br/>"
    for (i = 0; i < 100; i++)
        if (random[i])
            document.getElementById("semDup").innerHTML += `${random[i]} `;
}

function encontrar_num()
{
    let ar100 = new Array(100).fill(0);
    let random = new Array(100);
    let numPopular = [0, 0];

    document.getElementById("popularArray").innerHTML = "";

    for (i = 0; i < 100; i++)
    {
        random[i] = Math.floor(Math.random() * 100) + 1;
        ar100[random[i] - 1]++;
    }

    for (i = 0; i < 100; i++)
    {
        if (ar100[i] > numPopular[1])
        {
            numPopular[0] = i + 1;
            numPopular[1] = ar100[i];
        }
    }

    document.getElementById("popularArray").innerHTML = "O(s) número(s) que ocorre(m) mais vezes é/são:<br/>"

    for (i = 0; i < 100; i++)
    {
        if (ar100[i] == numPopular[1])
            document.getElementById("popularArray").innerHTML += `${i + 1} `
    }
}

function add_entre_pares()
{
    const num = document.getElementById("num").value;

    document.getElementById("entrePares").innerHTML = "";

    if (num >= 1001)
    {
        let newArr = new Array();
        
        for (let i = 0; i < num.length; i++)
            newArr.splice(i, 0, num[i])

        for (let i = 0; i < newArr.length; i++)
        {
            if (newArr[i] % 2 == 0 && newArr[i + 1] % 2 == 0)
                newArr.splice(i + 1, 0, "-");

            document.getElementById("entrePares").innerHTML += `${newArr[i]}`
        }
    }
    else
        document.getElementById("entrePares").innerHTML = "O número inserido é inválido!"
}

function somar_indice_arr()
{
    let arr1 = new Array(10);
    let arr2 = new Array(10);
    let arrSoma = new Array(10);

    for (let i = 0; i < 10; i++)
    {
        arr1[i] = Math.floor(Math.random() * 10) + 1;
        arr2[i] = Math.floor(Math.random() * 10) + 1;
        arrSoma[i] = arr1[i] + arr2[i];
    }

    document.getElementById("somaArr").innerHTML = `Array1 = [${arr1}]<br/>Array2 = [${arr2}]<br/>Resultado = [${arrSoma}]`;
}

function count_matriz()
{
    matrix = new Array(10);
    count = 0;

    for (let i = 0; i < 10; i++)
    {
        matrix[i] = new Array(10);
        for (let j = 0; j < 10; j++)
        {
            matrix[i][j] = Math.floor(Math.random() * 100) + 1;
            if (matrix[i][j] >= 10 && matrix[i][j] <= 20)
                count++;

            document.getElementById("mostrarMatriz").innerHTML += `${matrix[i][j]} `;
        }
        document.getElementById("mostrarMatriz").innerHTML += "<br/>"
    }
    document.getElementById("mostrarMatriz").innerHTML += `<br/>A matriz tem ${count} número(s) entre 10 e 20`
}