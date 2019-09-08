function soma () {
    var n1,n2

    n1 = document.getElementById ("primeiroNumero").Value;
    n2 = document.getElementById ("segundoNumero").Value;

    n1 = parseInt (n1);
    n1 = parseInt (n2);

    soma = n1 + n2;

    document.getElementById ("resposta").innerHTML = soma;
}