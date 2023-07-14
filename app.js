
let cardArray=[
    {
        name:'ginny',
        img:"imgs/ginny.jpg"
    },
    {
        name:"harry",
        img:"imgs/harry.avif"
    },
    {
        name:"hermione",
        img:"imgs/hermione.webp"
    },
    {
        name:"luna",
        img:"imgs/luna.jpg"
    },
    {
        name:"neville",
        img:"imgs/neville.avif"
    },
    {
        name:"ron",
        img:"imgs/ron.avif"
    },
    {
        name:"snape",
        img:"imgs/snape.webp"
    },
    {
        name:"voldemort",
        img:"imgs/voldemort.jpg"
    },
    {
        name:'ginny',
        img:"imgs/ginny.jpg"
    },
    {
        name:"harry",
        img:"imgs/harry.avif"
    },
    {
        name:"hermione",
        img:"imgs/hermione.webp"
    },
    {
        name:"luna",
        img:"imgs/luna.jpg"
    },
    {
        name:"neville",
        img:"imgs/neville.avif"
    },
    {
        name:"ron",
        img:"imgs/ron.avif"
    },
    {
        name:"snape",
        img:"imgs/snape.webp"
    },
    {
        name:"voldemort",
        img:"imgs/voldemort.jpg"
    }
]

cardArray.sort(()=>0.5-Math.random())

let cardChosen=[]
let cardChosenId=[]
let cardsWon=[]

let container=document.getElementById('grid')

function cardDisplay(){
    for(var i=0;i<cardArray.length;i++){
        let card=document.createElement("img")
        card.setAttribute("src","imgs/icon.jpg")
        card.setAttribute("data-id",i)
        container.appendChild(card)
        card.addEventListener("click",flipCard)
        // console.log(card)
    }
}

cardDisplay()

function flipCard(){
   let cardId=this.getAttribute("data-id")
   this.setAttribute("src",cardArray[cardId].img)
   cardChosen.push(cardArray[cardId].name)
   cardChosenId.push(cardId)
   if(cardChosen.length==2){
    setTimeout(memoryGame,500)
   }
}

function memoryGame(){
    let cardImg=document.querySelectorAll('img')
    if(cardChosenId[0]==cardChosenId[1]){
        cardImg[cardChosenId[0]].setAttribute("src","imgs/icon.jpg")
        cardImg[cardChosenId[1]].setAttribute("src","imgs/icon.jpg")
        alert("You chose the same image")
    }
    else if(cardChosen[0]==cardChosen[1]){
        cardImg[cardChosenId[0]].setAttribute("src","imgs/white.jpg")
        cardImg[cardChosenId[1]].setAttribute("src","imgs/white.jpg")
        cardImg[cardChosenId[0]].removeEventListener('click',flipCard)
        cardImg[cardChosenId[1]].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
    }
    else{
        cardImg[cardChosenId[0]].setAttribute("src","imgs/icon.jpg")
        cardImg[cardChosenId[1]].setAttribute("src","imgs/icon.jpg")
    }
    if(cardArray.length/2==cardsWon.length){
        document.querySelector('.result').innerHTML="You have Won";
        document.querySelector('.result').style.color='green';
    }
    document.querySelector('.result').textContent=cardsWon.length;
    cardChosen=[]
    cardChosenId=[]
}