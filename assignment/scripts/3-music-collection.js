console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  collection = {
    Title: title,
    Artist: artist,
    PublishedYear: yearPublished,
  }
  //myCollection.push(collection);
  myCollection.push(collection);
  
  return collection;
}

console.log(addToCollection('Kpop', 'Ice Cream', 'BlackPink', 2018));

//Use and Test the addToCollection Function:
console.log(addToCollection('Kpop', 'DDU-DU DDU-DU', 'BlackPink', 2018));
console.log(addToCollection('Rap', 'The Real Slim Shady', 'Eminem', 2010));
console.log(addToCollection('Pop', 'The Way You Make Me Feel', 'Michael Jackson', 2009));
console.log(addToCollection('Pop', 'Billie Jean', 'Michael Jackson', 2018));
console.log(addToCollection('Rock', 'Dont Stop Me Now', 'Queen', 1979));
console.log(addToCollection('Rock', 'I Want To Break Free', 'Queen', 2018));

console.log(myCollection);

//Create a Function showCollection.
function showCollection (collection) {
  for (let collectionItem of collection) {
    console.log(collectionItem.Title + " by " + collectionItem.Artist + ", published by " + collectionItem.PublishedYear);
  }
}

console.log(showCollection(myCollection));

//Create a function findByArtist
function findByArtist (collection, artist) {
  //This array would hold any matches.
  let emptyArray = [];
  for (let collectionItem of collection) {
    if (collectionItem.Artist === artist) {
      emptyArray.push(collectionItem);
    }
  }
  return emptyArray;
}

console.log(findByArtist(myCollection, 'Eminem'));
console.log(findByArtist(myCollection, 'Taylor Swift'));








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
