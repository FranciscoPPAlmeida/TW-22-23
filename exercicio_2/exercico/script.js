const tbody = document.getElementsByTagName('tbody')[0]

function generateKey(){
    
    const key = {
        estrelas: generateNumbers(1, 10, 2), 
        numeros: generateNumbers(1, 50, 5)
    }

    tbody.innerHTML = tbody.innerHTML + '<tr>' + 
        '<td>' + key.numeros.join(', ')  + "=>" + key.estrelas.join(', ')  + '</td>' +
        '<td>' + key.numeros.sort().join(', ') + '</td>' +
        '<td>' + key.estrelas.sort().join(', ')  + '</td>' +
    '</tr>'

}

function generateNumbers(min, max, length){

    const numeros = [];

    while(numeros.length < length){
        let number = (Math.random() * (max - min)) + min;
        let numberinteger = Math.round(number);

        if(!numeros.includes(numberinteger)){
            numeros.push(numberinteger);
        }

    }

    return numeros;

}

function limparChave(){
 
    tbody.innerHTML = '';

}