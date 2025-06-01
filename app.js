const modal = document.querySelector('#modal')//точка при классе, решетка при id
const content = document.querySelector('#content')

content.addEventListener('click', openCard)

modal.classList.add('open')

setTimeout(function(){

}, 2000)//задержка 2000мс

function openCard(){

    console.log('click is working')
}

console.log('modal', modal)