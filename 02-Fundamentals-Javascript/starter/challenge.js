
//--------------------------------------------------
// CHALLENGE 1 
const calcAverage = (score1, score2, score3) => {
  const average  = (score1 + score2 + score3) / 3;
  return average;
}

const scoreDolphins = calcAverage(99, 99, 99);
const scoreKoalas = calcAverage(12, 11, 49);

function checkWinner(scoreDol, scoreKoal){
  if(scoreDol >= scoreKoal * 2){
    console.log(`Dolphin Wins (${scoreDol} vs. ${scoreKoal})`);
  }else if(scoreKoal >= scoreDol * 2){
    console.log(`Koala Wins (${scoreKoal} vs. ${scoreDol})`);
  }else{
    console.log(`No team wins`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);