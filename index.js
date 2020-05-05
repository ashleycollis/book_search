findBook = require('./utils/findBook');
let booksResults = [];
let readingList = [];

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const displayBook = function () {
  return new Promise((resolve, reject) =>
    readline.question(`What book are you looking for? `, async (book) => {
      console.log(`Retrieving results matching your search for ${book}!`);
      await findBook(book);
      console.log('Top 5 Results:');
      console.log(bookResults);
      console.log('------');
      resolve();
    })
  );
};

const addToList = function () {
  return new Promise((resolve, reject) =>
    readline.question(
      `Please select the number of the book that you'd like to add to your Reading List `,
      async (book) => {
        console.log(`The ${book} has been added to your Reading List!`);
        console.log('is this resolved', bookResults);
        readingList.push(JSON.stringify(bookResults[book - 1]));
        console.log('Here is your reading list:');
        console.log(readingList[0]);
        resolve();
      }
    )
  );
};

const runProgram = async () => {
  await displayBook();
  await addToList();
  await readline.close();
};

runProgram();
