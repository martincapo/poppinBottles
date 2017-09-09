// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

function poppinBottles (totalInvest, emptyBottles, caps, byBottles, byCaps, totalBottles) {
  var cost = 2;
  var numBottles = Math.floor(totalInvest / cost);

  if(emptyBottles === undefined)
    emptyBottles = numBottles;
  else
    emptyBottles += numBottles;
  if(caps === undefined)
    caps = numBottles;
  else
    caps += numBottles;
  if(byBottles === undefined)
    byBottles = 0;
  if(byCaps === undefined)
    byCaps = 0;
  if(totalBottles === undefined)
    totalBottles = 0;

  if(numBottles >= 1) {
    totalInvest = cost * ( Math.floor(emptyBottles / 2) + Math.floor(caps / 4) );
    byBottles += (Math.floor(emptyBottles / 2));
    byCaps += Math.floor(caps / 4);
    totalBottles += numBottles;
    numBottles += poppinBottles(totalInvest, emptyBottles%2, caps%4, byBottles, byCaps, totalBottles);
  } else {
    console.log('TOTAL BOTTLES:', totalBottles);
    console.log('Remaining Bottles:', emptyBottles);
    console.log('Remaining Caps:', caps);
    console.log('Total Earned:');
    console.log(' Bottles:', byBottles);
    console.log(' Caps:', byCaps);
  }

  return numBottles;
}

var input = process.argv.slice(2)[0];
poppinBottles(input);