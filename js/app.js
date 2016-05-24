var currentBlockCounter = 0;
var polyominoBlockCounter = 0;



$(document).ready(function() {
	$('.tetromino').on('click', function() {
  		$(this).toggleClass('switched');
	});

	poly1 = new Polyomino({
	  name: 'poly1',
	  type: 'polyomino',
	});

	poly2 = new Polyomino({
	  name: 'poly2',
	  type: 'polyomino',
	});

	//console.log(poly2);
});

function getBlockID(blkObj) {
  console.log(blkObj.blocktype);
  if (blkObj.blocktype === 'polyomino') {      
    polyominoBlockCounter++;
    console.log('polyomino block counter at ' + polyominoBlockCounter);
  } else {
    console.log('not polyomino');
    return;
  }

  currentBlockCounter++;
  console.log('current block counter at ' + currentBlockCounter);

  return currentBlockCounter;
}
function randomNum () {

  var dec = Math.random();
  var num = dec*30;
  num = Math.floor(num);
  console.log("Random number is" + num)
}
function startGame() {

  //show 1 block dropping choose the block from a random number generator
   blockNum = []
   blockNum[0] = 1
   for(i=1; i < 8; i++){blockNum[i] =( i * 4) }
    var rNum = randomNum()
  var test
    console.log(blockNum)
    if (blockNum[0]!==rNum){ test = document.getElementsByClassName("tetromino ");
    test.display  = "inline-block" }

}