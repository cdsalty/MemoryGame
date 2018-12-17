// console.log("sanity-check");

// add a READY LISTNER TO THE WHOLE DOM:
// javascript to wait until the dom is finished loading bfore runnng anything

$(document).ready(()=>{
    // console.log("sanity-check");

    $('button').click(function(){
        console.log($(this)); 
        // this is the thing that is clicked on and in this case, it would be the button 
        // attr method will get the value of that attribute   
        let gridSize = $(this).attr('diff');
        // the diff is the grid-gridSize;
        console.log(gridSize);
    let cards = [];

// OUR MONSTERS START AT 1 SO START I AT 1; EVERY TIME THROUGH THE LOOP, WE PUSH 2 MONSTERS ON BECAUSE
// THIS IS A MATCHING GAME AND WE NEED 2. SO WE LOOP HALF OF THE GRID SIZE BY DOING GRIDSIZE/2, BUT WE
// WE NEED TO ADD 1 BECAUSE WE STARTED AT 1, NOT AT ZERO.
    for(let i = 1; i <= gridSize/2; i++){ //Since we started at one, we need < and =
        let monsterNumber = i;
        if(i<10){
            monsterNumber = "0"+i
        }
        cards.push(`<img src="./images/monsters-${monsterNumber}.png"/>`);
        cards.push(`<img src="./images/monsters-${monsterNumber}.png"/>`);
    }

    cards = shuffleDeck(cards);

    // console.log(cards);
    let memoryHTML = '';
    cards.forEach((card)=>{
        memoryHTML += `  
        <div class="card col-sm-3">
            <div class="card-holder">
                <div class="card-front">${card}</div>
                <div class="card-back"></div>
            </div>
        </div>
        `

    })
    console.log(memoryHTML);
    $('.memory-game').html(memoryHTML);

    // USER JUST CLICKED ON CARD:


    $('.memory-game').html(memoryHTML);
    $('.card-holder').click(function(){
        $(this).addClass('flip');
        let cardsUp = $('.flip');
        if (cardsUp.length === 2){
            const card1 = cardsUp[0];
            const card2 = cardsUp[1];
            if(card1.innerHTML == card2.innerHTML){
                cardsUp.removeClass('flip');
                cardsUp.addClass('matched');
            }else{
                setTimeout(()=>{
                    cardsUp.removeClass('flip');
                },1000);
            }
        }
    });
    });
});

function shuffleDeck(aDeckToBeShuffled){
    // Loop. A lot. Like those machines in casinos that make 
    // funny noises.
    // When the loop (lots of times) is document, the array 
    // (deck) will be shuffled
    for(let i = 0; i < 1000000; i++){
        let rand1 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        let rand2 = Math.floor(Math.random() * aDeckToBeShuffled.length);
        // we need to switch aDeckToBeShuffled[rand1] with
        // aDeckToBeShuffled[rand2].
        // BUT, we have to save the value of one of them so
        // we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    // console.log(aDeckToBeShuffled);
    return aDeckToBeShuffled
}
