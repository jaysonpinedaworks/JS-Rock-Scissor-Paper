let playPaper = document.querySelector("#play-paper");
let playRock = document.querySelector("#play-rock");
let playScissor = document.querySelector("#play-scissor");
let resultPlay = document.querySelector("#resultPlay");
let gifPlay = document.querySelector("#gif-play");
let aiGifPlay = document.querySelector("#aiGif-play");
let resultList = document.querySelector("#resultList");
let playerWinList = document.querySelector("#winList");
let compWinList = document.querySelector("#compList");

 
playPaper.addEventListener("click", functionPaper);



function functionPaper(){
    let x = 0;
    let names =["Paper", "Rock", "Scissor"];
    let index = Math.round(Math.random()*2);
    // console.log(index);
    // console.log(names[index]);
    
   
    if (x == "0" && index == 1 ){
        resultPlay.innerHTML = "You Win";
        resultPlay.style.color = "green";
        // resultPlay.style.transition = "0.8s";
        gifPlay.classList.add("gifPlayZero");
        gifPlay.classList.remove("gifPlay1");
        gifPlay.classList.remove("gifPlay2");
        aiGifPlay.classList.add("gifPlayTwo");
        aiGifPlay.classList.remove("gifPlayOne");
        aiGifPlay.classList.remove("gifPlayThree");

        let winItem = document.createElement("li");
        winItem.innerHTML = "Win" ;
        winItem.style.color = "green";
        playerWinList.appendChild(winItem).style.listStyleType = "none";

        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "" ;
        compWinList.appendChild(winItemComp).style.listStyleType = "none";

        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Paper Vs Rock --- you WIN"
       
        resultList.appendChild(resultItem).style.listStyleType = "none";
    }
    else if (x == "0" && index == 2){
        resultPlay.innerHTML = "You lose";
        resultPlay.style.color = "red";
        gifPlay.classList.add("gifPlayZero");
        gifPlay.classList.remove("gifPlay2");
        gifPlay.classList.remove("gifPlay1");
        aiGifPlay.classList.remove("gifPlayTwo")
        aiGifPlay.classList.remove("gifPlayOne")
        aiGifPlay.classList.add("gifPlayThree");

        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "Win" ;
        winItemComp.style.color = "red";
        compWinList.appendChild(winItemComp).style.listStyleType = "none";

        let winItem = document.createElement("li");
        winItem.innerHTML = "" ;
        playerWinList.appendChild(winItem).style.listStyleType = "none";
        // gifPlay.innerHTML = names[index];
        // opponentOne.classList.add("opponentTwo");
        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Paper Vs Scissors --- you Lose"
        resultList.appendChild(resultItem).style.listStyleType = "none";
    }
    else if (x == "0" && index == 0){
        resultPlay.innerHTML = "X";
        resultPlay.style.color = "black"
        gifPlay.classList.add("gifPlayZero");
        gifPlay.classList.remove("gifPlay2");
        gifPlay.classList.remove("gifPlay1");
        aiGifPlay.classList.add("gifPlayOne");
        aiGifPlay.classList.remove("gifPlayThree");
        aiGifPlay.classList.remove("gifPlayTwo");
        // display.innerHTML = names[index];
        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Paper Vs Paper --- Tie"
        resultList.appendChild(resultItem).style.listStyleType = "none";
        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "" ;
        compWinList.appendChild(winItemComp).style.listStyleType = "none";

        let winItem = document.createElement("li");
        winItem.innerHTML = "" ;
        playerWinList.appendChild(winItem).style.listStyleType = "none";
    }
  
    let resultListChild = resultList.childElementCount;
    // console.log(resultListChild);
    if (resultListChild >= 11 ) {
        resultList.firstElementChild.remove();
    }  
    let winListChild = playerWinList.childElementCount;
    // console.log(winListChild);
    if (winListChild >= 11){
        playerWinList.firstElementChild.remove();
    }
    let compWinListChild = compWinList.childElementCount;
    // console.log(compWinListChild);
    if (compWinListChild >= 11){
        compWinList.firstElementChild.remove();
    }

}

playRock.addEventListener("click", functionRock);

function functionRock(){
    let x = 1;
    let names =["Paper", "Rock", "Scissor"];
    let index = Math.round(Math.random()*2);
  
    // console.log(index);
    // console.log(names[index]);

    if (x == "1" && index == 2 ){
        resultPlay.innerHTML = "You Win";
        resultPlay.style.color = "green"
       
        gifPlay.classList.add("gifPlay1");
        gifPlay.classList.remove("gifPlayZero");
        gifPlay.classList.remove("gifPlay2");
        aiGifPlay.classList.add("gifPlayThree");
        aiGifPlay.classList.remove("gifPlayTwo");
        aiGifPlay.classList.remove("gifPlayOne");

        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "" ;
        compWinList.appendChild(winItemComp).style.listStyleType = "none";

        let winItem = document.createElement("li");
        winItem.innerHTML = "Win" ;
        winItem.style.color = "green";
        playerWinList.appendChild(winItem).style.listStyleType = "none";
        
        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Rock Vs Scissor --- you WIN"
        resultList.appendChild(resultItem).style.listStyleType = "none";
    }
    else if (x == "1" && index == 0){
        resultPlay.innerHTML = "You lose";
        resultPlay.style.color = "red";
     
        gifPlay.classList.add("gifPlay1");
        gifPlay.classList.remove("gifPlayZero");
        gifPlay.classList.remove("gifPlay2");
        aiGifPlay.classList.remove("gifPlayThree");
        aiGifPlay.classList.remove("gifPlayTwo");
        aiGifPlay.classList.add("gifPlayOne");

        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "Win" ;
        winItemComp.style.color = "red";
        compWinList.appendChild(winItemComp).style.listStyleType = "none";

        let winItem = document.createElement("li");
        winItem.innerHTML = "" ;
        playerWinList.appendChild(winItem).style.listStyleType = "none";
        // gifPlay.innerHTML = names[index];
        // opponentOne.classList.add("opponentTwo");
        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Rock Vs Paper --- you Lose"
        resultList.appendChild(resultItem).style.listStyleType = "none";
    }
    else if (x == "1" && index == 1){
        resultPlay.innerHTML = "X";
        resultPlay.style.color = "black"
        gifPlay.classList.add("gifPlay1");
        gifPlay.classList.remove("gifPlay2");
        gifPlay.classList.remove("gifPlayZero");
        aiGifPlay.classList.add("gifPlayTwo");
        aiGifPlay.classList.remove("gifPlayThree");
        aiGifPlay.classList.remove("gifPlayOne");

        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "" ;
        compWinList.appendChild(winItemComp).style.listStyleType = "none";

        let winItem = document.createElement("li");
        winItem.innerHTML = "" ;
        playerWinList.appendChild(winItem).style.listStyleType = "none";
        // display.innerHTML = names[index];
        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Rock Vs Rock --- Tie";
        resultList.appendChild(resultItem).style.listStyleType = "none";
    }
    let resultListChild = resultList.childElementCount;
    // console.log(resultListChild);
    if (resultListChild >= 11 ) {
        resultList.firstElementChild.remove();
    }  
    let winListChild = playerWinList.childElementCount;
    // console.log(winListChild);
    if (winListChild >= 11){
        playerWinList.firstElementChild.remove();
    }
    let compWinListChild = compWinList.childElementCount;
    // console.log(compWinListChild);
    if (compWinListChild >= 11){
        compWinList.firstElementChild.remove();}
}
playScissor.addEventListener("click", functionScissor);

function functionScissor(){
    let x = 2;
    let names =["Paper", "Rock", "Scissor"];
    let index = Math.round(Math.random()*2);
    // console.log(index);
    // console.log(names[index]);

    if (x == "2" && index == 0 ){
        resultPlay.innerHTML = "You Win";
        resultPlay.style.color = "green"
       
        gifPlay.classList.add("gifPlay2");
        gifPlay.classList.remove("gifPlay1");
        gifPlay.classList.remove("gifPlayZero");

        aiGifPlay.classList.add("gifPlayOne");
        aiGifPlay.classList.remove("gifPlayTwo");
        aiGifPlay.classList.remove("gifPlayThree");

        let winItem = document.createElement("li");
        winItem.innerHTML = "Win" ;
        playerWinList.appendChild(winItem).style.listStyleType = "none";
        winItem.style.color = "green";
        

        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "" ;
        compWinList.appendChild(winItemComp).style.listStyleType = "none";
        
        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Scissor Vs Paper --- you WIN"
        resultList.appendChild(resultItem).style.listStyleType = "none";
    }
    else if (x == "2" && index == 1){
        resultPlay.innerHTML = "You lose";
        resultPlay.style.color = "red";
       
        gifPlay.classList.add("gifPlay2");
        gifPlay.classList.remove("gifPlayZero");
        gifPlay.classList.remove("gifPlay1");

        aiGifPlay.classList.remove("gifPlayOne")
        aiGifPlay.classList.remove("gifPlayThree")
        aiGifPlay.classList.add("gifPlayTwo");

        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "Win" ;
        winItemComp.style.color = "red";
        

        compWinList.appendChild(winItemComp).style.listStyleType = "none";

        let winItem = document.createElement("li");
        winItem.innerHTML = "" ;
        playerWinList.appendChild(winItem).style.listStyleType = "none";
        // gifPlay.innerHTML = names[index];
        // opponentOne.classList.add("opponentTwo");
        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Scissor Vs Rock --- you Lose"
        resultList.appendChild(resultItem).style.listStyleType = "none";
    }
    else if (x == "2" && index == 2){
        resultPlay.innerHTML = "X";
        resultPlay.style.color = "black";
        gifPlay.classList.add("gifPlay2");
        gifPlay.classList.remove("gifPlayZero");
        gifPlay.classList.remove("gifPlay1");
        aiGifPlay.classList.add("gifPlayThree");
        aiGifPlay.classList.remove("gifPlayOne");
        aiGifPlay.classList.remove("gifPlayTwo");

        let winItemComp = document.createElement("li");
        winItemComp.innerHTML = "" ;
        compWinList.appendChild(winItemComp).style.listStyleType = "none";

        let winItem = document.createElement("li");
        winItem.innerHTML = "" ;
        playerWinList.appendChild(winItem).style.listStyleType = "none";
        // display.innerHTML = names[index];
        let resultItem = document.createElement("li");
        resultItem.innerHTML = "Scissor Vs Scissor --- Tie";
        resultList.appendChild(resultItem).style.listStyleType = "none";
    }
    
    let resultListChild = resultList.childElementCount;
    // console.log(resultListChild);
    if (resultListChild >= 11 ) {
        resultList.firstElementChild.remove();
    }  
    let winListChild = playerWinList.childElementCount;
    // console.log(winListChild);
    if (winListChild >= 11){
        playerWinList.firstElementChild.remove();
    }
    let compWinListChild = compWinList.childElementCount;
    // console.log(compWinListChild);
    if (compWinListChild >= 11){
        compWinList.firstElementChild.remove();}
}

