const monContainer = document.querySelector("#monster-container")
const backBttn = document.querySelector("#back")
const fwdBttn = document.querySelector("#forward")
let createForm = document.querySelector("#create-monster > form")

fetch('http://localhost:3000/monsters?_limit=50&_page=1')
    .then(res => res.json())
    .then(monArr => {
        monArr.forEach(monsterObj => renderOneCard(monsterObj))
    })

function renderOneCard(monsterObj){
    const monCard = document.createElement('div')
        monCard.dataset.id = monsterObj.id
        
    const detH2 = document.createElement('h2')
        detH2.textContent = monsterObj.name

    const detH4 = document.createElement('h4')
        detH4.textContent = monsterObj.age

    const detPara = document.createElement('p')
        detPara.textContent = monsterObj.description
    
        monCard.append(detH2, detH4, detPara)
        monContainer.append(monCard)    
}

createForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const newMonster = {
        name: evt.target.name.value,
        age: evt.target.age.value,
        description: evt.target.description.value
    }

    fetch('http://localhost:3000/monsters',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newMonster)   
    })
    .then(res => res.json())
    .then(newMonObj => renderOneCard(newMonObj));
})


fwdBttn.addEventListener('click', evt =>{

})

backBttn.addEventListener('click', evt =>{
    
})
