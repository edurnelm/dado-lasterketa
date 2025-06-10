let dado_kopurua = document.getElementById('jokalari_kopurua');
let dadoak = document.getElementById('dadoak');
let jokalari_kopurua = 2;
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let tirada_1 = document.getElementById('tirada_bakarra');
let tirada_3 = document.getElementById('3_tirada');
let tirada_3_plus = document.getElementById('3_tirada_+');
let jokoa_hasi = document.getElementById('hasi_jolasa');
let irabazlea = document.getElementById('irabazlea');
let hasi = document.getElementById('berriz');
let puntuazioa = document.getElementById('puntuazioa');
let puntuazioa1 = document.getElementById('puntuazioa1');
let puntuazioa2 = document.getElementById('puntuazioa2');

let jokatu = true;
let jokatu_aurretik = true;

let batekoakBota = document.getElementById('batekoak');
batekoakBota.style.display = 'none';

const notStyle =(object)=>{
    object.style.backgroundColor = 'grey';
    object.style.left = '5px';
    object.style.top = '5px';
    object.style.boxShadow = '0px 0px';
}

const jokaldiMotaAutatu = mota => {
    jokaldi_mota = mota;
    if (mota === 'tirada1'){
        tirada_1.style.backgroundColor = '#4ECDC4';
        tirada_1.style.color = 'black';
        tirada_3.style.backgroundColor = '';
        tirada_3.style.color = '';
        tirada_3_plus.style.backgroundColor = '';
        tirada_3_plus.style.color = '';

    } else if (mota === 'tirada3'){
        tirada_1.style.backgroundColor = '';
        tirada_1.style.color = '';
        tirada_3.style.backgroundColor = '#4ECDC4';
        tirada_3.style.color = 'black';
        tirada_3_plus.style.backgroundColor = '';
        tirada_3_plus.style.color = '';

    } else if (mota === 'tirada3plus'){
        tirada_1.style.backgroundColor = '';
        tirada_1.style.color = '';
        tirada_3.style.backgroundColor = '';
        tirada_3.style.color = '';
        tirada_3_plus.style.backgroundColor = '#4ECDC4';
        tirada_3_plus.style.color = 'black';
    }
};

jokaldiMotaAutatu('tirada1');

const add_dice = () => {
    dadoak.innerHTML += `<div class = "dadodiv">
    <p>${jokalari_kopurua} jokalaria</p>
    <img class = "dado" id = "dado${jokalari_kopurua}" src="./images/bat.webp">
    </div>`;
};

const subtract_dice = () => {
    dadoak.removeChild(dadoak.lastChild);
};

const add = () => {
    console.log('Zortzi baino gutxiago?');
    if (jokalari_kopurua < 8){ // Zortzi baino dado gutxiago daude?
        console.log('Bai -----> gehitu dadoa.');
        jokalari_kopurua ++; // Dado kopurua gehitu
        add_dice(); //Dadoa gehitu
    } else {
        console.log('Ez')
    }
    dado_kopurua.innerHTML = 'Jokalari kopurua: ' + jokalari_kopurua;
};
const subtract = () => {
    console.log('Bi baino gehiago?');
    if(jokalari_kopurua > 2){
        console.log('Bai');
        console.log('Kendu');
        jokalari_kopurua --;
        subtract_dice();
    }else{
        console.log('ez')
    }
    dado_kopurua.innerHTML = 'Jokalari kopurua: ' + jokalari_kopurua;
};
const randomNum =()=>{
    return Math.floor(Math.random()*6);
};
const changeImage =(num, dadoid)=>{
    if (num === 0){
        document.getElementById(dadoid).src = './images/bat.webp';
    } else if (num === 1) {
        document.getElementById(dadoid).src = './images/bi.webp';
    } else if (num === 2) {
        document.getElementById(dadoid).src = './images/hiru.webp';
    } else if (num === 3) {
        document.getElementById(dadoid).src = './images/lau.webp';
    } else if (num === 4) {
        document.getElementById(dadoid).src = './images/bost.webp';
    } else if (num === 5) {
        document.getElementById(dadoid).src = './images/sei.webp';
    };
}
let count = 0;
let scores = [0, 0, 0, 0, 0, 0, 0, 0]
let winners = []
const hasiJolasa = () => {
    if (jokaldi_mota === 'tirada1'){
        puntuazioa.style.display = 'block';
        puntuazioa1.innerHTML = '';
        puntuazioa2.innerHTML = '';
        for (i = 0; i < jokalari_kopurua; i++){
            number =randomNum();
            changeImage(number, `dado${i+1}`)
            scores[i] += number+1;
            if (i % 2 === 0){
                puntuazioa1.innerHTML += `<p><b>${i+1} jokalaria:</b> ${scores[i]} puntu`
            } else {
                puntuazioa2.innerHTML += `<p><b>${i+1} jokalaria:</b> ${scores[i]} puntu`  
            }
        };
        jokatu = false;
        notStyle(jokoa_hasi);
        let max = Math.max(...scores);
        for (i=1; i <= jokalari_kopurua; i++){
            if (scores[i-1] === max){
                winners.push(i);
            };
        };
        irabazlea.style.display = 'block';
        if (winners.length === 1){
            irabazlea.innerHTML = `<b>Irabazlea:</b> ${winners[0]} jokalaria ${max} punturekin`
        } else {
            irabazlea.innerHTML = `<b>Irabazleak:</b> ${winners.join(', ')} jokalariak ${max} punturekin.`
        }
    } else if (jokaldi_mota === 'tirada3'){
        if (count < 3){
            puntuazioa.style.display = 'block';
            puntuazioa1.innerHTML = '';
            puntuazioa2.innerHTML = '';
            for (i = 0; i < jokalari_kopurua; i++){
                number = randomNum();
                changeImage(number, `dado${i+1}`)
                scores[i] += number+1;
                if (i % 2 === 0){
                    puntuazioa1.innerHTML += `<p><b>${i+1} jokalaria:</b> ${scores[i]} puntu`
                } else {
                    puntuazioa2.innerHTML += `<p><b>${i+1} jokalaria:</b> ${scores[i]} puntu`  
                }
            };
            count ++;
        if (count === 3){
            notStyle(jokoa_hasi);
            let max = Math.max(...scores);
            for (i=1; i <= jokalari_kopurua; i++){
                if (scores[i-1] === max){
                    winners.push(i);
                };
            };
            console.log(winners);
            irabazlea.style.display = 'block';
            console.log(winners.length)
            if (winners.length === 1){
                irabazlea.innerHTML = `<b>Irabazlea:</b> ${winners[0]} jokalaria ${max} punturekin`
            } else {
                irabazlea.innerHTML = `<b>Irabazleak:</b> ${winners.join(', ')} jokalariak ${max} punturekin.`
            }
        };
    };

    } else if (jokaldi_mota === 'tirada3plus'){
        let dadoaBotata= true
        if (count < 3){
            let batekoak = [];
            let batekoakBotata = document.getElementById('batekoak');
            console.log(batekoakBotata);
            puntuazioa.style.display = 'block';
            puntuazioa1.innerHTML = '';
            puntuazioa2.innerHTML = '';
            for (i = 0; i < jokalari_kopurua; i++){
                number = randomNum();
                changeImage(number, `dado${i+1}`)
                scores[i] += number+1;
                if (i % 2 === 0){
                    puntuazioa1.innerHTML += `<p><b>${i+1} jokalaria:</b> ${scores[i]} puntu`
                } else {
                    puntuazioa2.innerHTML += `<p><b>${i+1} jokalaria:</b> ${scores[i]} puntu`  
                }
                if (number === 0){
                    if (i % 2 === 0){
                        puntuazioa1.innerHTML += '<p style = "font-size: 20px;">Sakatu <i>Bota batekoak</i> berriro botatzeko dadoa </p>'
                    } else {
                        puntuazioa2.innerHTML += '<p style = "font-size: 20px;">Sakatu <i>Bota batekoak</i> berriro botatzeko dadoa </p>'
                    }
                    dadoaBotata = false;
                    batekoak.push(i);
                }
            }
            if (!dadoaBotata){
                batekoakBota.style.display = 'block';
                batekoakBota.onclick =()=> {
                    puntuazioa1.innerHTML = '';
                    puntuazioa2.innerHTML = '';
                    batekoak.forEach(dado => {
                        number = randomNum();
                        changeImage(number, `dado${dado+1}`)
                        scores[dado] += number+1;
                    });
                    for (i = 0; i < jokalari_kopurua; i++){
                        if (i % 2 === 0){
                            puntuazioa1.innerHTML += `<p><b>${i+1} jokalaria:</b> ${scores[i]} puntu`
                        } else {
                            puntuazioa2.innerHTML += `<p><b>${i+1} jokalaria:</b> ${scores[i]} puntu`  
                        }
                    }
                    jokatu = true;
                    jokoa_hasi.style = '';
                    batekoakBota.style.display = 'none';
                    count ++;
                    if (count === 3){
                        notStyle(jokoa_hasi);
                        let max = Math.max(...scores);
                        for (i=1; i <= jokalari_kopurua; i++){
                            if (scores[i-1] === max){
                                winners.push(i);
                            };
                        };
                        console.log(winners);
                        irabazlea.style.display = 'block';
                        console.log(winners.length)
                        if (winners.length === 1){
                            irabazlea.innerHTML = `<b>Irabazlea:</b> ${winners[0]} jokalaria ${max} punturekin`
                        } else {
                            irabazlea.innerHTML = `<b>Irabazleak:</b> ${winners.join(', ')} jokalariak ${max} punturekin.`
                        }
                    };
                };
                jokatu = false;
                notStyle(jokoa_hasi);
                
            } else {
                count ++;
            }
            console.log(count)
            console.log(dadoaBotata);
            
        if (count === 3){
            notStyle(jokoa_hasi);
            let max = Math.max(...scores);
            for (i=1; i <= jokalari_kopurua; i++){
                if (scores[i-1] === max){
                    winners.push(i);
                };
            };
            console.log(winners);
            irabazlea.style.display = 'block';
            console.log(winners.length)
            if (winners.length === 1){
                irabazlea.innerHTML = `<b>Irabazlea:</b> ${winners[0]} jokalaria ${max} punturekin`
            } else {
                irabazlea.innerHTML = `<b>Irabazleak:</b> ${winners.join(', ')} jokalariak ${max} punturekin.`
            }
        };
    }
    }
    
};

const reset = () =>{
    irabazlea.style.display = 'none';
    batekoakBota.style.display = 'none';
    winners = [];
    for (let i=1; i <= jokalari_kopurua; i++){
        document.getElementById(`dado${i}`).src = './images/bat.webp';
    }

    jokatu = true;
    jokoa_hasi.style = '';
    count = 0;
    scores = [0, 0, 0, 0, 0, 0, 0, 0]
    jokatu_aurretik = true;
    puntuazioa.style.display = 'none';
}

 plus.onclick =()=> {if (jokatu_aurretik){add()}} ;

 minus.onclick =()=> {if (jokatu_aurretik){subtract()}} ;

 tirada_1.onclick = () => {if(jokatu_aurretik){jokaldiMotaAutatu('tirada1')}};

 tirada_3.onclick = () => {if(jokatu_aurretik){jokaldiMotaAutatu('tirada3')}};

 tirada_3_plus.onclick = () => {if(jokatu_aurretik){jokaldiMotaAutatu('tirada3plus')}};

 jokoa_hasi.onclick =()=> {if(jokatu && count < 3){ hasiJolasa(); jokatu_aurretik = false;}};

 hasi.onclick = reset;

