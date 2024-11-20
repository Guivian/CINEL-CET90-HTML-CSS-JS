function apagar_msg(stringvar)
{
    const text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function limpar_canvas(areaDesenho, x, y)
{
    const canvas = document.getElementById(areaDesenho);
    const clear = canvas.getContext("2d");

    clear.clearRect(0, 0, x, y);
}

function desenhar_retangulo()
{
    const canvas = document.getElementById("Canvas1");
    const draw = canvas.getContext("2d");

    draw.fillStyle = "blue";
    draw.moveTo(25, 25);
    draw.fillRect(25,25,150,50);
    draw.stroke();
}

function desenhar_circulo()
{
    const canvas = document.getElementById("Canvas2");
    const draw = canvas.getContext("2d");

    draw.fillStyle = "red";
    draw.beginPath();
    draw.arc(100, 75, 75, 0, 2 * Math.PI);
    draw.fill();
}