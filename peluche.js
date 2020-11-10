const img1 = document.getElementById('img_peluche')
const target1 = document.getElementById('description1')
const target2 = document.getElementById('description2')
const target3 = document.getElementById('description3')

const btn1_p = document.getElementById('btn1_p')
const bnt2_p= document.getElementById('btn2_p')
const btn3_p = document.getElementById('btn3_p')
const btn4_p = document.getElementById('btn4_p')
const btn5_p = document.getElementById('btn5_p')

/*   ************valeur si menu deroulant choisi***********************
const norbert = document.getElementById('norbert')
const arnold = document.getElementById('arnold')
const lenny = document.getElementById('lenny')
const gustave = document.getElementById('gustave')
const garfunkel = document.getElementById('garfunkel')
*/   

fetch('http://localhost:3000/api/teddies')
.then(res => console.log(res));

// ====> convertion (body) res => en JSON

fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => console.log(data));

fetch('http://localhost:3000/api/teddies')
.then(res => {

    if(res.ok){
        res.json().then(data => {
            img1.src = data[0].imageUrl ;

            btn1_p.addEventListener('click', () => {
                img1.src = data[0].imageUrl;
                target1.innerHTML = 'nom : ' + data[0].name;
                target2.innerHTML = 'prix : ' + data[0].price;
                target3.innerHTML = 'couleurs : ' + data[0].colors;

            })
            bnt2_p.addEventListener('click', () => {
                img1.src = data[1].imageUrl
                target1.innerHTML = 'nom : ' + data[1].name;
                target2.innerHTML = 'prix : ' + data[1].price;
                target3.innerHTML = 'couleurs : ' + data[1].colors;

            })
            btn3_p.addEventListener('click', () => {
                img1.src = data[2].imageUrl
                target1.innerHTML = 'nom : ' + data[2].name;
                target2.innerHTML = 'prix : ' + data[2].price;
                target3.innerHTML = 'couleurs : ' + data[2].colors;


            })
            btn4_p.addEventListener('click', () => {
                img1.src = data[3].imageUrl
                target1.innerHTML = 'nom : ' + data[3].name;
                target2.innerHTML = 'prix : ' + data[3].price;
                target3.innerHTML = 'couleurs : ' + data[3].colors;

            })
            btn5_p.addEventListener('click', () => {
                img1.src = data[4].imageUrl
                target1.innerHTML = 'nom : ' + data[4].name;
                target2.innerHTML = 'prix : ' + data[4].price;
                target3.innerHTML = 'couleurs : ' + data[4].colors;

            })
        })
    } else{
        console.log('ERREUR');
        document.getElementById('erreur').innerHTML = 'ERREUR'
    }
})