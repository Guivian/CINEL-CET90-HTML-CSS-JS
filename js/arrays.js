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
    let random100 = new Array(100);

    for (i = 0; i < 100; i++)
    {
        random100[i] = Math.floor(Math.random() * 100) + 1;
        ar100[random100[i] - 1]++;
    }

    for (i = 0; i < 100; i++)
    {
        if (ar100[random[i] - 1] > 1)
            random100[i] = null;
    }

    for (i = 0; i < 100; i++)
        if (random100[i] != null)
            document.getElementById("duplicados").innerHTML += "";
}