const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="">'
const imgReprovado = '<img src="./reprovado.png" alt="">'
let tableRow = '';
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt('Digite a nota mínima'))
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
form.addEventListener('submit', function(e){
    e.preventDefault();

    addRow();
    updateTable();
    updateAverage();
});

function addRow(){
    const inputNomeAtividade  = document.getElementById('nome-atividade');
    const inputNotaAtividade  = document.getElementById('nota-atividade');
    
    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let row = '<tr>';
        row += `<td>${inputNomeAtividade.value}</td>`;
        row += `<td>${inputNotaAtividade.value}</td>`;
        row += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        row += '</tr>';
        tableRow += row;
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    
}

function updateTable() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = tableRow;
}

function updateAverage () {
    const mediaFinal = calcMedia();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2) ;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado ;
}

function calcMedia () {
    let somaNotas = 0;
    for(let i = 0; i < notas.length; i++ ){
    somaNotas += notas[i];
}
    return mediaFinal = somaNotas/notas.length ;
}