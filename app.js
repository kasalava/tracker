const modal = document.querySelector('#modal')//точка при классе, решетка при id
const content = document.querySelector('#content')

content.addEventListener('click', openCard)

function openCard(){
    console.log('click is working')
}

console.log('modal', modal)