function calcular() {
    // Definir o dia de hoje e separar dia mes e ano
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1;
    const ano = hoje.getFullYear();

    // Definir o input do dia mes e ano
    var diaInput = Number(document.querySelector('.dia').value);
    var mesInput = Number(document.querySelector('.mes').value);
    var anoInput = Number(document.querySelector('.ano').value);

    //Definir o resultado
    var resA = document.querySelector('.res-a');
    var resM = document.querySelector('.res-m');
    var resD = document.querySelector('.res-d');

    // Conta do dia atual - o dia do input
    var anos = ano - anoInput;
    var meses = mes - mesInput;
    var dias = dia - diaInput;

    if(diaInput >= 32 || mesInput >= 13 || anoInput >= ano || diaInput <= 0 || mesInput <= 0 || anoInput <= 0){
        alert('ERRO')
}else{
    // Se o dia de nascimento for maior que o dia atual, subtrai um mês
    if (dias < 0) {
        meses--;
        // Ajusta o número de dias para o mês anterior
        const ultimoDiaMesAnterior = new Date(ano, mes - 1, 0).getDate();
        dias += ultimoDiaMesAnterior;
    }
    // Se o mês de nascimento for maior que o mês atual, subtrai um ano
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Exibe os resultados
    resA.innerHTML = `${anos}`;
    resM.innerHTML = `${meses}`;
    resD.innerHTML = `${dias}`;

}
}