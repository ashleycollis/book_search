const prompt = require('prompt');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const displayBook = function () {
  readline.question(`What book are you looking for?`, (book) => {
    console.log(`Retrieving results matching your search for ${book}!`);
    readline.close();
  });
};

displayBook();
