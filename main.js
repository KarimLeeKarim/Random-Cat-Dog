const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');


cat_btn.addEventListener('click', getrandomCat);
dog_btn.addEventListener('click', getrandomDog);


async function getrandomCat(){
    const response = await fetch('https://aws.random.cat/meow');
    const data = await response.json()
    cat_result.innerHTML = `
    <img src="${data.file}">
    `
}

async function getrandomDog(){
    const response = await fetch('https://random.dog/woof.json');
    const data = await response.json()
    if(data.url.includes('.mp4')){
        getrandomDog();
    }
    else{
        dog_result.innerHTML = `<img src="${data.url}">`
    }
}


// function picofCats(cat) {
//     cat_result.innerHTML = `
//     <img src="${cat}">
//     `
// }


// function picofDogs(dog) {
//     dog_result.innerHTML = `
//     <img src="${dog}">
//     `
// }