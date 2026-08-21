//1. pegar a hora atual
const agora = new Date();
const hora                = agora.getHours();
const minutos             = agora.getMinutes    
const minutosFormatados   = String(minutos).padStart(2,'0');
const horaTexto           = '${hora}:${minutosFormatados}';;

//2. seleciona elementos do HTML
const pagina     = document.getElementById('pagina');
const emojiEl    = document.getElementById('emoji');
const saudacaoEl = document.getElementById('saudacao');
const horarioEl  = document.getElementById('horario');

//3. variaveis que guardam resultado
let turno    ='';
let emojiStr ='';
let msg      = '';

//4. decidir o turno com if/else
    if (hora >= 5 && hora < 12) {
        turno    ='manha';
        emojiStr = '';
        msg      = 'bom dia'; 
    }
else if (hora >= 12 && hora < 18){
    turno    ='tarde'
    emojiStr ='';
    msg      = 'boa tarde';

    } else if (hora >= 18 && hora < 23){
    turno    ='noite'
    emojiStr ='';
    msg      = 'boa noite';

    } else {
    turno    ='madrugada'
    emojiStr ='';
    msg      = 'boa madrugada';

    }

    //5. aplicar o tema na pagina
    pagina.classList.add(turno)

    //6. colocar conteudo nos elementos
    emojiEl.textContent    =emojiStr;
    saudacaoEl.textContent =msg;
    horarioEl.textContent  ='são${horaTexto}h';

    //7. log para o desenvolvedor
    console.log('turno: ${turno} | hora:${horatexto}')