const request = new XMLHttpRequest();
request.open("GET", "main.json");
request.setRequestHeader("Content-Type", "application/json");
request.send();
request.onload = () => {
    if (request.status === 200) {
        console.log(request.response);
        const main = JSON.parse(request.response);
        console.log(main);


        document.querySelector(".name").innerHTML = main[0].name;
        document.querySelector('.age').innerHTML = main[0].age;


        document.getElementsByClassName('photo')[0].src = main[0].img;
    } else {
        console.error('Ошибка загрузки JSON:', request.statusText);
    }
};
const request2 = new XMLHttpRequest();
request2.open("GET", "main.json");
request2.setRequestHeader("Content-Type", "application/json");
request2.send();
request2.onload = () => {
    if (request2.status === 200) {
        console.log(request2.response);
        const main = JSON.parse(request2.response);
        console.log(main);

        document.querySelector('.nameDybala').innerHTML = main[1].name;
        document.querySelector('.ageDybala').innerHTML = main[1].age;
        document.getElementsByClassName('dybala')[0].src = main[1].img;
    }
}
const request3 = new XMLHttpRequest();
request3.open("GET", "main.json");
request3.setRequestHeader("Content-Type", "application/json");
request3.send();
request3.onload = () => {
    if (request3.status === 200) {
        console.log(request3.response);
        const main = JSON.parse(request3.response);
        console.log(main);

        document.querySelector('.nameMod').innerHTML = main[2].name;
        document.querySelector('.ageMod').innerHTML = main[2].age;
        document.getElementById('modricImg').src = main[2].img
    }
}
const request4 = new XMLHttpRequest();
request4.open("GET", "main.json");
request4.setRequestHeader("Content-Type", "application/json");
request4.send();
request4.onload = () => {
    if (request4.status === 200) {
        console.log(request4.response);
        const main = JSON.parse(request4.response);
        console.log(main);

        document.querySelector('.nameRodrygo').innerHTML = main[3].name;
        document.querySelector('.ageRodrygo').innerHTML = main[3].age;
        document.getElementById('rodImg').src = main[3].img
    }
}



const button = document.createElement('button');

   button.style.position = 'absolute';
   button.style.top = '498px';
   button.style.width = '109px'
   button.style.height = '29px';
   button.style.borderRadius = '20px';
   button.style.border = 'none'
   button.style.background = 'red'
   button.style.fontSize = '18px'
button.style.fontWeight = 'bold'
   button.style.color = 'white'
button.style.cursor = 'pointer';
button.classList.add('button');
 document.body.appendChild(button);
 button.textContent = 'GET'



button.addEventListener('click', (e) => {
    const request = new XMLHttpRequest();
    request.open('GET' , "any.json")
    request.setRequestHeader('Content-Type', 'application/json')
    request.send()
    request.onload = function () {
        if (request.status === 200) {

            const any = JSON.parse(request.response);
            console.log(any)

        }
    }
})
