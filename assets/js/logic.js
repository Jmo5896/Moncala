$(document).ready(()=>{

    function populateGameBoard(numStones, playerNum, slots=6) {
        
        
        for (let i = 1; i <= slots; i++) {
            let newDiv = $('<div>').addClass('card').attr('id', `p${playerNum}-${}`);
            newDive.text(`stones: ${numStones}`)
        }
    }





});
