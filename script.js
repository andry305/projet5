const img1 = document.getElementById('img_peluche')
const img2 = document.getElementById('img_camera')
const img3 = document.getElementById('img_meuble')
const target = document.getElementById('description1')

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
        })
    } else{
        console.log('ERREUR');
        document.getElementById('erreur').innerHTML = 'ERREUR'
    }
})

fetch('http://localhost:3000/api/cameras')
.then(res => console.log(res));

fetch('http://localhost:3000/api/cameras')
.then(res => res.json())
.then(data => console.log(data));

fetch('http://localhost:3000/api/cameras')
.then(res => {

    if(res.ok){
        res.json().then(data => {
            img2.src = data[0].imageUrl ;
        })
    } else{
        console.log('ERREUR');
        document.getElementById('erreur').innerHTML = 'ERREUR'
    }
})

fetch('http://localhost:3000/api/furniture')
.then(res => console.log(res));

fetch('http://localhost:3000/api/furniture')
.then(res => res.json())
.then(data => console.log(data));

fetch('http://localhost:3000/api/furniture')
.then(res => {

    if(res.ok){
        res.json().then(data => {
            img3.src = data[0].imageUrl ;
        })
    } else{
        console.log('ERREUR');
        document.getElementById('erreur').innerHTML = 'ERREUR'
    }
})