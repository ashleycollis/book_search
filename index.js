const prompt = require('prompt');

displayBook = function () {
  prompt.start();
  prompt.get(['Query'], function (err, result) {
    if (err) {
      return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('query: ' + result.query);
  });
};

displayBook();
