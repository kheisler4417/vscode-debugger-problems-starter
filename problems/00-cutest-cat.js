/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

debugger

function cutestCat(cats) {
  let cutest = null;
  let i = 0;
  let cutestIndex = null;

  while (i < cats.length) {
    const cat = cats[i];
    if (cat.cuteness > cutest) {
      cutest = cat.cuteness;
      cutestIndex = i;
    }
    i++;
  }

  return cats[cutestIndex];
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
