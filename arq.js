function soma () {
    var n1,n2

    n1 = parseInt (document.getElementById ("primeiroNumero").Value);
    n2 = parseInt (document.getElementById ("segundoNumero").Value);

    soma = n1 + n2;

    document.getElementById ("resposta").innerHTML = soma;
}
