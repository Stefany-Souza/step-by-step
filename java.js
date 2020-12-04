
let nomegeral = "meu anjo";
function bemVindo(){
    let nomeVisitante = document.querySelector('#nome');
    let olah2 = document.createElement('h2');
    let textoolah2 = document.createTextNode(`Seja muito bem-vindo(a), ${nomeVisitante.value}! Fico muito feliz em te ver por aqui!`);
    let div = document.querySelector('#BoasVindasHtml');
    olah2.appendChild(textoolah2);

    let criarp = document.createElement('p');
    let textodop = document.createTextNode("Esse é o meu Website que consiste na apresentação de algumas expressões idiomáticas da língua inglesa de maneira mais leve e com exemplos, de forma que o aprendizado se torne mais agradável. O Step By Step foi criado com a intenção de compartilhar expressões que nós podemos utilizar no dia-a-dia e que contribuem para a imersão na cultura de outros países. Como o nome diz, um passo de cada vez, para que você respeite e goste do seu processo de aprendizado. Se você é monitor/professor dá uma conferida em 'agradecimentos'. ");
    criarp.appendChild(textodop);
    div.innerHTML="";
    div.appendChild(olah2);
    div.appendChild(criarp);
    olah2.id="h2BemVindo";
    criarp.id="pBemVindo";
    if (nomeVisitante.value !== ""){
        nomegeral = nomeVisitante.value;
    }
}
let botaonome = document.querySelector('#botaonome');
botaonome.onclick = bemVindo;

function FraseFuncao(){
    let nomeVisitante = nomegeral;
    let fraseVisitante = document.querySelector('#teste2');
    let div = document.querySelector('#divfrase');

    if(fraseVisitante.value == ""){
        let naoescreveu = document.createElement('p');
        let texto1 = document.createTextNode(`Poxa, ${nomeVisitante}! Você poderia tentar assimilar esse Idiom ao seu cotidiano com uma frase.`);
        naoescreveu.appendChild(texto1);
        div.innerHTML="";
        div.appendChild(naoescreveu);
    }
    else{ 
        let escreveu = document.createElement('p');
        let texto2 = document.createTextNode(`Eu gostei muito da sua frase, ${nomeVisitante}!!`);
        escreveu.appendChild(texto2);
        div.innerHTML="";
        div.appendChild(escreveu);
    }

}

let botao = document.querySelector('#botao');
botao.onclick = FraseFuncao; 

function FraseFuncao3(){
    let nomeVisitante = nomegeral;
    let fraseVisitante = document.querySelector('#input3');
    let div = document.querySelector('#frase3');

    if(fraseVisitante.value == ""){
        let naoescreveu = document.createElement('p');
        let texto1 = document.createTextNode(`Poxa, ${nomeVisitante}! Você poderia tentar assimilar esse Idiom ao seu cotidiano com uma frase. Don't be a couch potato.`);
        naoescreveu.appendChild(texto1);
        div.innerHTML="";
        div.appendChild(naoescreveu);
    }
    else{ 
        let escreveu = document.createElement('p');
        let texto2 = document.createTextNode(`Eu gostei muito da sua frase, ${nomeVisitante}! Muito criativa!`);
        escreveu.appendChild(texto2);
        div.innerHTML="";
        div.appendChild(escreveu);
    }
}
let botao3 = document.querySelector('#botao3');
botao3.onclick = FraseFuncao3; 

function FraseFuncao4(){
    let nomeVisitante = nomegeral;
    let fraseVisitante = document.querySelector('#input4');
    let div = document.querySelector('#frase4');

    if(fraseVisitante.value == ""){
        let naoescreveu = document.createElement('p');
        let texto1 = document.createTextNode(`Poxa, ${nomeVisitante}! Tente criar uma frasezinha com go-getter.`);
        naoescreveu.appendChild(texto1);
        div.innerHTML="";
        div.appendChild(naoescreveu);
    }
    else{ 
        let escreveu = document.createElement('p');
        let texto2 = document.createTextNode(`Eu adorei a sua frase, ${nomeVisitante}!!`);
        escreveu.appendChild(texto2);
        div.innerHTML="";
        div.appendChild(escreveu);
    }
}
let botao4 = document.querySelector('#botao4');
botao4.onclick = FraseFuncao4; 

function FraseFuncao5(){
    let nomeVisitante = nomegeral;
    let fraseVisitante = document.querySelector('#input5');
    let div = document.querySelector('#frase5');

    if(fraseVisitante.value == ""){
        let naoescreveu = document.createElement('p');
        let texto1 = document.createTextNode(`Poxa, ${nomeVisitante}! Você poderia tentar.`);
        naoescreveu.appendChild(texto1);
        div.innerHTML="";
        div.appendChild(naoescreveu);
    }
    else{ 
        let escreveu = document.createElement('p');
        let texto2 = document.createTextNode(`Você é realmente um know-it-all, ${nomeVisitante}!!`);
        escreveu.appendChild(texto2);
        div.innerHTML="";
        div.appendChild(escreveu);
    }
}
let botao5 = document.querySelector('#botao5');
botao5.onclick = FraseFuncao5; 

function FraseFuncao6(){
    let nomeVisitante = nomegeral;
    let fraseVisitante = document.querySelector('#input6');
    let div = document.querySelector('#frase6');

    if(fraseVisitante.value == ""){
        let naoescreveu = document.createElement('p');
        let texto1 = document.createTextNode(`Poxa, ${nomeVisitante}! Não fique tímido para tentar.`);
        naoescreveu.appendChild(texto1);
        div.innerHTML="";
        div.appendChild(naoescreveu);
    }
    else{ 
        let escreveu = document.createElement('p');
        let texto2 = document.createTextNode(`Que frase fofa, ${nomeVisitante}!!`);
        escreveu.appendChild(texto2);
        div.innerHTML="";
        div.appendChild(escreveu);
    }
}
let botao6 = document.querySelector('#botao6');
botao6.onclick = FraseFuncao6; 

function FraseFuncao7(){
    let nomeVisitante = nomegeral;
    let fraseVisitante = document.querySelector('#input7');
    let div = document.querySelector('#frase7');

    if(fraseVisitante.value == ""){
        let naoescreveu = document.createElement('p');
        let texto1 = document.createTextNode(`Poxa, ${nomeVisitante}! Vamos lá, você consegue!`);
        naoescreveu.appendChild(texto1);
        div.innerHTML="";
        div.appendChild(naoescreveu);
    }
    else{ 
        let escreveu = document.createElement('p');
        let texto2 = document.createTextNode(`Adoro esses tipos frases, ${nomeVisitante}!!`);
        escreveu.appendChild(texto2);
        div.innerHTML="";
        div.appendChild(escreveu);
    }
}
let botao7 = document.querySelector('#botao7');
botao7.onclick = FraseFuncao7; 

function FraseFuncao8(){
    let nomeVisitante = nomegeral;
    let fraseVisitante = document.querySelector('#input8');
    let div = document.querySelector('#frase8');

    if(fraseVisitante.value == ""){
        let naoescreveu = document.createElement('p');
        let texto1 = document.createTextNode(`${nomeVisitante}, erros fazem parte do processo. `);
        naoescreveu.appendChild(texto1);
        div.innerHTML="";
        div.appendChild(naoescreveu);
    }
    else{ 
        let escreveu = document.createElement('p');
        let texto2 = document.createTextNode(`Uau, ${nomeVisitante}!! Você me surpreendeu!`);
        escreveu.appendChild(texto2);
        div.innerHTML="";
        div.appendChild(escreveu);
    }
}
let botao8 = document.querySelector('#botao8');
botao8.onclick = FraseFuncao8; 

function FraseFuncao9(){
    let nomeVisitante = nomegeral;
    let fraseVisitante = document.querySelector('#input9');
    let div = document.querySelector('#frase9');

    if(fraseVisitante.value == ""){
        let naoescreveu = document.createElement('p');
        let texto1 = document.createTextNode(`Poxa, ${nomeVisitante}! Você poderia tentar assimilar esse Idiom ao seu cotidiano.`);
        naoescreveu.appendChild(texto1);
        div.innerHTML="";
        div.appendChild(naoescreveu);
    }
    else{ 
        let escreveu = document.createElement('p');
        let texto2 = document.createTextNode(`Você é bem criativo(a), ${nomeVisitante}! Amei!`);
        escreveu.appendChild(texto2);
        div.innerHTML="";
        div.appendChild(escreveu);
    }
}
let botao9 = document.querySelector('#botao9');
botao9.onclick = FraseFuncao9; 

let contar = 1;
while(contar < 3){
    console.log(`O número atual é ${contar}`);
    contar++
}
//coloquei porque gostei do while, mas não achei onde encaixar e para que eu poderia usar ele nesse site. 