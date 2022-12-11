import '../style.css'

import { selectRandomFromArray }  from './util'


document.getElementById('button2')
.addEventListener('click',onClick)

document.getElementById('button1').addEventListener('click',clean)

function onClick(){

    const muchgroups = document.getElementById('grouptoget')
    const participants = document.getElementById('participants')
    const winner = document.getElementById('groups')
    const nameList = participants.value.split("\n")
    const winnerName = groupAll(nameList)
}


function groupAll(){
    const muchgroups = document.getElementById('grouptoget').value
    

}

function clean(){
document.getElementById('participants').value = ''
}




/*
document.getElementById('button')
.addEventListener('click',onClick)


function onClick(){
    const product = document.getElementById('product')

    const participants = document.getElementById('participants')

    const winner = document.getElementById('winner')

    const nameList = participants.value.split("\n")
    const winnerName = selectRandomFromArray(nameList)
    let msg

    if(!product.value) msg='No estás sorteando nada'
    else if (!participants.value) msg='No hay participantes'
    else {
        msg =`Enhorabuena ${winnerName} has ganado ${product.value}`
        
    }

    winner.innerHTML = msg
}

*/