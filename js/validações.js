function apagar_msg(stringvar)
{
    const text = "Tem certeza que deseja apagar?";
    if (confirm(text) == true)
        document.getElementById(stringvar).innerHTML = null;
}

function validar_string()
{
    const string = document.getElementById("string").value;

    if (isNaN(string) == true)
        document.getElementById("is_num").innerHTML = "Erro! A string inserida não é um número";
    else
        document.getElementById("is_num").innerHTML = "A string " + string + " é um número";
}

function confirmar_password()
{
    const pass = document.getElementById("pass").value;
    const conf_pass = document.getElementById("conf_pass").value;

    if (pass != conf_pass)
        document.getElementById("pass_msg").innerHTML = "Erro! As passwords não coincidem";
    else
        document.getElementById("pass_msg").innerHTML = "Sucesso!";
}