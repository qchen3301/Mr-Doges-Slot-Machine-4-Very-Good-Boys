// urls = [pic1.jpg, pic2.jpg, pic3.jpg, pic4.jpg]

// <div>	<img src=urls[0]></div>

	//coins represents the player's pot of tokens. The game instansiates with 5 coins
	let coins = 5

	$("#play").click( function() {	
		coins--
		$("#userCoins").text(`${coins}x shinebois`)
		console.log(coins)
		if (coins < 1){
			alert("Hey u! No more shinybois uwu")
			$("#play").attr("disabled","disabled")}
		else {
			alert("U put in a dogecoin")		
			}
	})//close .click function()

	$("#fade").click( function() {
		$(".slotReels").addClass("animated fadeOutUp")
		$(".col-content").css("background-image",`url(${url[x]})`)
	})
	


/*	this object slotsMachine handles the abstracted behavior of the virtual slots machine
	and also stores data relevant to a slots machine irl, such as symbols on each reel	*/
var slotsMachine = {
	reel: ["won", "two", "three", "four", "five", "six", "seven", "eight", "nine", "doge", "nCage", "bork"],

	/*	the pullLever function "pulls" the slot machine's lever: 
		it generates a new array with length of 3, taking a randomly selected index
		from the reel array, and inserting them sequentially into
		the new array.
		Method to randomly select one index from an array taken from this Stack Overflow thread:
			https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array	*/
	pullLever: function(firstSlot, secondSlot, thirdSlot){
		firstSlot = this.reel[Math.floor(Math.random()*this.reel.length)]
		secondSlot = this.reel[Math.floor(Math.random()*this.reel.length)]
		thirdSlot = this.reel[Math.floor(Math.random()*this.reel.length)]

		result = [firstSlot, secondSlot, thirdSlot]
	}, //close pullLever function

	/*	the payOut function evaluates the results of the pullLever function
		and responds accordingly. If the 3 slots match up, the user receives a prize. 
		If the 3 slots don't match, the user does not. Certain slot combinations
		yield bigger prizes than others: these conditions are checked in a hierarchical
		if-else-if structure, with the highest payout conditions checked first, and a no-win situation
		as the closing else statement	*/
	payOut: function(){
		console.log(result)
		//hiearchies of win conditions are more clearly documented in the README.md
		if (	((result[0] == "seven") && (result[1] == "seven") && (result[2] == "seven")) ||
		      	((result[0] == "doge") && (result[1] == "doge") && (result[2] == "doge")) 	) {
			console.log("WOW! yuor the biggest winner!!! dang oh heck")  
			coins += 5	}
		else if (	((result[0] == "nCage") && (result[1] == "nCage") && (result[2] == "nCage")) ||
		      		((result[0] == "bork") && (result[1] == "bork") && (result[2] == "bork")) 	) {		
			console.log("ur breddy good wow") 
			coins += 3	}
		else if ( (result[0] == "won") && (result[1]=="won") && (result[2])=="won") {
			console.log("FREE PLAYYYYY!!!")
			/*free play!*/}
		else if ((result[0] == result[1]) && (result[0] == result[2]) && (result[1] == result[2])) {
			//	^^evaluates that reels 1, 2 and 3 are equal, assuming no higher win condition has been met
			console.log("You win!")
			coins++	}
		else
			console.log("You lost!")
	},//close payOut function

	/*	this function takes the values in result[], concats those values with "assets/" and ".jpg",
		then maps it to a new array, displayReel. The indices of this array will be accessed by 
		HTML elements to display in the document the results of the user's draws from pullLever()	*/
	slotsDisplay: function() {
		
	}//close slotsDisplay function

}//close slotsMachine object	

console.log("First play!!!")
slotsMachine.pullLever()	
slotsMachine.payOut()

console.log("Second play!!!")
slotsMachine.pullLever()
slotsMachine.payOut()

console.log("Third play! (WOW)")
slotsMachine.pullLever()
slotsMachine.payOut()