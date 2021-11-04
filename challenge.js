/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    
     let heightSort = height.sort(function(a, b) {
    return a - b;
  });
  
  if(heightSort[heightSort.length -1] > k){
    return heightSort[heightSort.length -1] - k;
  }else{
   return 0; 
  }

}
