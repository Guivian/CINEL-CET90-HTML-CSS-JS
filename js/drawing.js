function apagar_msg(stringvar)
{
    let text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function limpar_canvas(areaDesenho, x, y)
{
    let canvas = document.getElementById(areaDesenho);
    let clear = canvas.getContext("2d");

    clear.clearRect(0, 0, x, y);
}

function desenhar_retangulo()
{
    let canvas = document.getElementById("Canvas1");
    let draw = canvas.getContext("2d");

    draw.fillStyle = "blue";
    draw.moveTo(25, 25);
    draw.fillRect(25,25,150,50);
    draw.stroke();
}

function desenhar_circulo()
{
    let canvas = document.getElementById("Canvas2");
    let draw = canvas.getContext("2d");

    draw.fillStyle = "red";
    draw.beginPath();
    draw.arc(100, 75, 75, 0, 2 * Math.PI);
    draw.fill();
}