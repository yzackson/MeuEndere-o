
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const init = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
}

let cep = '';

let getAddress = () => {
    let cep = document.getElementById('cepInput');
    let request = new Request(`https://viacep.com.br/ws/${cep.value}/json`);
    fetch(request, init)
        .then(response => {
            return response.json()
        })
        .then(blob => {
            console.log(blob)
            document.getElementById('CEP').innerHTML = blob.cep;
            document.getElementById('Rua').innerHTML = blob.logradouro;
            document.getElementById('Complemento').innerHTML = blob.complemento;
            document.getElementById('Bairro').innerHTML = blob.bairro;
            document.getElementById('Localidade').innerHTML = blob.localidade;
            document.getElementById('UF').innerHTML = blob.uf;
        })
        .then (arg => {
            document.getElementsByClassName("container")[0].style.display = "flex";
        })
}
